import "./FilterTab.css";

const FiltersTab = ({ filtersItems, changeTab, currentValue }) => {
  return (
    <div className="filters-tabs">
      {filtersItems.map((item) => (
        <div
          className={
            item.value === currentValue
              ? "filter-tabs__item active"
              : "filter-tabs__item"
          }
          onClick={() => changeTab(item.value)}
          key={item.value}
        >
          {item?.icon && <item.icon size={32} />}
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default FiltersTab;
