import Home from "../Home";

const Cart = ({ selectedCourse, totalCredits }) => {

    const remainingCredits = 20 - totalCredits;

    return (
        <div>
            <div className="w-[100%]  p-3 shadow-md shadow-slate-300">
                <p className="text-sm font-bold text-blue-500">Credit Hour Remaining  
                
                {remainingCredits} hr</p>
                <hr className="my-4" />
                <p className="text-base font-bold">Course Name</p>
                <ol>
                    {selectedCourse?.map((course, index) => (
                        <li key={index} className="text-gray-500 text-sm">
                            {index + 1}. {course.title}
                        </li>
                    ))}
                </ol>
                <hr className="my-4" />
                <p className="text-sm font-semibold mb-4">Total Credit Hour : {totalCredits}</p>
                <hr className="my-4" />
                <p className="text-sm font-semibold mb-4">Total Price : USD</p>

            </div>
        </div>
    );
};

export default Cart;