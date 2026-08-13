import {useState} from 'react'
import {FaChevronDown, FaCheck} from 'react-icons/fa'

import './index.css'

const SortDropdown = props => {
  const {sortByOptions, activeOptionId, onChangeSortOption} = props
  const [showOptions, setShowOptions] = useState(false)

  const activeOption = sortByOptions.find(each => each.value === activeOptionId)

  const onSelectOption = value => {
    onChangeSortOption(value)
    setShowOptions(false)
  }

  return (
    <div className="dropdown-container">
      <div className="dropdown-sort">
        <p>Sort by {activeOption.displayText}</p>
        <button
          type="button"
          className="dropdown-button"
          onClick={() => setShowOptions(!showOptions)}
        >
          <FaChevronDown className="down-icon" />
        </button>
      </div>

      {showOptions && (
        <ul className="options-list">
          {sortByOptions.map(each => (
            <li
              key={each.id}
              className={
                activeOptionId === each.id
                  ? 'option-item active-option'
                  : 'option-item'
              }
              onClick={() => onSelectOption(each.value)}
            >
              <span>{each.displayText}</span>
              {activeOptionId === each.id && <FaCheck />}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SortDropdown
