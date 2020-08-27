import React from 'react'
import Chart from './Chart';
import { useDispatch, useSelector } from "react-redux";

const ForecastChart = ({ day }) => {

  const data = []

  const entries = day.forecast.map(item =>
    ({
      x: item.hour,
      y: Math.floor(item.main.temp),
    }))
  data.push({
    id: day.date,
    data: entries
  })


  const datax = [
    {
      "id": "Serie ",
      "data": [
        {
          "x": 2000,
          "y": 2
        },
        {
          "x": 2001,
          "y": 5
        },
        {
          "x": 2002,
          "y": 11
        },
        {
          "x": 2003,
          "y": 9
        },
        {
          "x": 2004,
          "y": 8
        }
      ]
    },
    {
      "id": "Serie 2",
      "data": [
        {
          "x": 2000,
          "y": 6
        },
        {
          "x": 2001,
          "y": 8
        },
        {
          "x": 2002,
          "y": 1
        },
        {
          "x": 2003,
          "y": 3
        },
        {
          "x": 2004,
          "y": 9
        }
      ]
    },
    {
      "id": "Serie 3",
      "data": [
        {
          "x": 2000,
          "y": 1
        },
        {
          "x": 2001,
          "y": 4
        },
        {
          "x": 2002,
          "y": 10
        },
        {
          "x": 2003,
          "y": 12
        },
        {
          "x": 2004,
          "y": 12
        }
      ]
    },
    {
      "id": "Serie 4",
      "data": [
        {
          "x": 2000,
          "y": 4
        },
        {
          "x": 2001,
          "y": 2
        },
        {
          "x": 2002,
          "y": 5
        },
        {
          "x": 2003,
          "y": 6
        },
        {
          "x": 2004,
          "y": 11
        }
      ]
    },
    {
      "id": "Serie 5",
      "data": [
        {
          "x": 2000,
          "y": 9
        },
        {
          "x": 2001,
          "y": 11
        },
        {
          "x": 2002,
          "y": 12
        },
        {
          "x": 2003,
          "y": 1
        },
        {
          "x": 2004,
          "y": 6
        }
      ]
    },
    {
      "id": "Serie 6",
      "data": [
        {
          "x": 2000,
          "y": 11
        },
        {
          "x": 2001,
          "y": 7
        },
        {
          "x": 2002,
          "y": 9
        },
        {
          "x": 2003,
          "y": 10
        },
        {
          "x": 2004,
          "y": 1
        }
      ]
    },
    {
      "id": "Serie 7",
      "data": [
        {
          "x": 2000,
          "y": 10
        },
        {
          "x": 2001,
          "y": 3
        },
        {
          "x": 2002,
          "y": 3
        },
        {
          "x": 2003,
          "y": 4
        },
        {
          "x": 2004,
          "y": 5
        }
      ]
    },
    {
      "id": "Serie 8",
      "data": [
        {
          "x": 2000,
          "y": 12
        },
        {
          "x": 2001,
          "y": 10
        },
        {
          "x": 2002,
          "y": 2
        },
        {
          "x": 2003,
          "y": 11
        },
        {
          "x": 2004,
          "y": 10
        }
      ]
    },
    {
      "id": "Serie 9",
      "data": [
        {
          "x": 2000,
          "y": 8
        },
        {
          "x": 2001,
          "y": 1
        },
        {
          "x": 2002,
          "y": 7
        },
        {
          "x": 2003,
          "y": 8
        },
        {
          "x": 2004,
          "y": 7
        }
      ]
    },
    {
      "id": "Serie 10",
      "data": [
        {
          "x": 2000,
          "y": 7
        },
        {
          "x": 2001,
          "y": 9
        },
        {
          "x": 2002,
          "y": 8
        },
        {
          "x": 2003,
          "y": 2
        },
        {
          "x": 2004,
          "y": 4
        }
      ]
    },
    {
      "id": "Serie 11",
      "data": [
        {
          "x": 2000,
          "y": 3
        },
        {
          "x": 2001,
          "y": 12
        },
        {
          "x": 2002,
          "y": 6
        },
        {
          "x": 2003,
          "y": 5
        },
        {
          "x": 2004,
          "y": 2
        }
      ]
    },
    {
      "id": "Serie 12",
      "data": [
        {
          "x": 2000,
          "y": 5
        },
        {
          "x": 2001,
          "y": 6
        },
        {
          "x": 2002,
          "y": 4
        },
        {
          "x": 2003,
          "y": 7
        },
        {
          "x": 2004,
          "y": 3
        }
      ]
    }
  ];


  return (
    <>

      <h1>Chart</h1>

      <div style={{ height: '40vh' }}>
        <Chart data={data} />

      </div>
    </>

  )
}

export default ForecastChart
