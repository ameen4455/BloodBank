import './chart.scss';
import React, {useEffect, useRef} from 'react';
import Chart from 'chart.js';

const Charting = (props) => {
    const canvasRef = useRef();
    useEffect(() => {
        new Chart(canvasRef.current.getContext("2d"), {
            type: "pie",
            responsive: true,
            maintainAspectRatio: false,
            data: {
                //Bring in data
                labels: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
                datasets: [
                    {
                        backgroundColor: ['#fa7f70', '#f8433f', '#7b1d1b', '#ef403d', '#ce5c5c', '#c33230', '#e1455e', '#b22d2b'],
                        label: "Sales",
                        data: [props.data['A+ve'] ? props.data['A+ve'] : 0,
                            props.data['A-ve'] ? props.data['A-ve'] : 0,
                            props.data['B+ve'] ? props.data['B+ve'] : 0,
                            props.data['B-ve'] ? props.data['B-ve'] : 0,
                            props.data['AB+ve'] ? props.data['AB+ve'] : 0,
                            props.data['AB-ve'] ? props.data['AB-ve'] : 0,
                            props.data['O+ve'] ? props.data['O+ve'] : 0,
                            props.data['O-ve'] ? props.data['O-ve'] : 0,
                        ],
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }, []);

    return(
        <div id="chdiv">
            <canvas id="blchart"  ref={canvasRef} />
        </div>
    );
}

export default Charting;