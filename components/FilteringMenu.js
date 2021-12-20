import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VIEW_FILTER_ROTATION = [0, 90];
const DATE_FILTERING_ICONS = ["sort-numeric-down-alt", "sort-numeric-down"]

const FilteringMenu = ({onChange, filter}) => {

    return (
        <div className="filtering-menu">
            <FontAwesomeIcon
                className="clickable hoverable mr-3"
                icon={DATE_FILTERING_ICONS[+filter.date.asc]}
                size="2x"
                onClick={() => 
                    onChange('date', {asc: !filter.date.asc})}/>
            <FontAwesomeIcon
                className="clickable hoverable"
                icon="stream"
                size="2x"
                rotation={VIEW_FILTER_ROTATION[+filter.view.list]}
                onClick={() =>
                    onChange('view', {list: !filter.view.list})}/>
        </div>
    )
}

export default FilteringMenu;