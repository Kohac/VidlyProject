import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              className="page-link"
              style={{ cursor: "pointer" }}
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;

// class Pagination extends React.Component {
//   render() {
//     let classes = "page-item";
//     if (this.props.isActive) classes += " active";
//     return (
//       <nav aria-label="...">
//         <ul className="pagination">
//           <li className={classes}>
//             <a className="page-link" href="#" onClick={this.props.onClick}>
//               1
//             </a>
//           </li>
//           <li className={classes}>
//             <a className="page-link" href="#" onClick={this.props.onClick}>
//               2
//             </a>
//           </li>
//           <li className={classes}>
//             <a className="page-link" href="#" onClick={this.props.onClick}>
//               3
//             </a>
//           </li>
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Pagination;
