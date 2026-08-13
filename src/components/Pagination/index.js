import './index.css'

const Pagination = props => {
  const {activePage, totalPages, onClickPrevious, onClickNext} = props

  return (
    <div className="pagination-container">
      <button
        type="button"
        className="page-btn"
        testid="pagination-left-button"
        onClick={onClickPrevious}
        disabled={activePage === 1}
      >
        &#8249;
      </button>

      <p className="page-number">
        <span testid="active-page-number">{activePage}</span> of {totalPages}
      </p>

      <button
        type="button"
        className="page-btn"
        testid="pagination-right-button"
        onClick={onClickNext}
        disabled={activePage === totalPages}
      >
        &#8250;
      </button>
    </div>
  )
}

export default Pagination
