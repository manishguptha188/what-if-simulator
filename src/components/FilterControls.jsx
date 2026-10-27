function FilterControls({
  selectedCategory,
  onCategoryChange,
  showRarelyUsedOnly,
  onToggleRarelyUsed,
  onResetSimulation,
}) {
  return (
    <div className="filter-card">
      <h3>Filter Subscriptions</h3>

      {/* We'll add the controls here */}

        <label>
            Category:{' '}
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Productivity">Productivity</option>
              <option value="Fitness">Fitness</option>
              <option value="Education">Education</option>
              <option value="Finance">Finance</option>
              <option value="Other">Other</option>
            </select>
          </label>
        <label>
            <input
              type="checkbox"
                checked={showRarelyUsedOnly}
                onChange={(e) => onToggleRarelyUsed(e.target.checked)}
            />
            Show Rarely Used Only
          </label>
          <button
            type="button"
            onClick={onResetSimulation}
            className="btn-secondary"
            >
            Reset What-If Simulation
        </button>  
        

    </div>
  )
}

export default FilterControls