import { useState } from 'react'

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
}

function RatingInput(props) {
  const [currentValue, setCurrentValue] = useState(0)
  const [hoverValue, setHoverValue] = useState(undefined)
  const stars = Array(5).fill(0)

  const handleClick = (value) => {
    setCurrentValue(value)
    props.getRating(value)
    console.log(value + ' chlid')
  }

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue)
  }

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  return (
    <div style={styles.stars}>
      {stars.map((_, index) => {
        let myColor =
          (hoverValue || currentValue) > index ? colors.orange : colors.grey
        return (
          <i
            className="las la-star"
            key={index}
            size={24}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            style={{
              marginRight: 10,
              cursor: 'pointer',
              color: myColor,
            }}
          ></i>
        )
      })}
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
  },
  textarea: {
    border: '1px solid #a9a9a9',
    borderRadius: 5,
    padding: 10,
    margin: '20px 0',
    minHeight: 100,
    width: 300,
  },
  button: {
    border: '1px solid #a9a9a9',
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
}

export default RatingInput
