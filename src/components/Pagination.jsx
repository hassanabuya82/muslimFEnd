

const Pagination = ({ currentPage, onPageChange, totalPages, pageSize }) => {
    const alltotalPages = Math.ceil(totalPages / pageSize);
//     console.log(totalPages);

    const renderPaginationLinks = () => {
        return Array.from({ length: alltotalPages }, (_, i) => i + 1).map((pageNumber) => (
            <li key={pageNumber} className={pageNumber === currentPage ? "activePagination" : ""}>
                <a href="#" onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        ));
    };

    return (
        <>
        
        <ul className="pagination my-8 flex-wrap gap-4">
            <li>
                <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className={`border p-3 border-orange-300 rounded-md ${currentPage === 1 ?'' : 'hover:bg-orange-600 hover:text-white hover:font-bold'} `}>Previous</button>
            </li>

            <div className="flex gap-1"><ul>{renderPaginationLinks()}</ul></div>

            <li>
                <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === alltotalPages} className={`border p-3 border-orange-300 rounded-md ${currentPage === alltotalPages ?'' : 'hover:bg-orange-600 hover:text-white hover:font-bold'} `}>Next</button>
            </li>
        </ul>
        {/* <div className="justify-center">{alltotalPages} Pages</div> */}
        </>
    );
};
            
export default Pagination;