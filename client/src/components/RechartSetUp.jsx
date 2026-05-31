import React from 'react'
import { Bar, Pie, Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Tooltip, Legend)

const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444", "#06b6d4", "#8b5cf6", "#ec4899"]

const RechartSetUp = ({ charts }) => {
    if (!charts || charts.length === 0) return null

    return (
        <div>
            {charts.map((chart, index) => {
                const labels = chart.data.map(d => d.name)
                const values = chart.data.map(d => Number(d.value))
                const data = {
                    labels,
                    datasets: [{
                        label: chart.title,
                        data: values,
                        backgroundColor: COLORS,
                        borderColor: COLORS,
                        borderWidth: 2,
                        borderRadius: chart.type === 'bar' ? 6 : 0,
                    }]
                }
                return (
                    <div key={index} style={{ marginBottom: '2rem', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px', background: '#fff' }}>
                        <h4 style={{ fontWeight: '600', marginBottom: '12px' }}>📊 {chart.title}</h4>
                        <div style={{ height: '300px' }}>
                            {chart.type === 'bar' && <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />}
                            {chart.type === 'pie' && <Pie data={data} options={{ responsive: true, maintainAspectRatio: false }} />}
                            {chart.type === 'line' && <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default RechartSetUp