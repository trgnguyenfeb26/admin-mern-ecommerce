import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../redux/actions/ProductActions";
import Swal from 'sweetalert2';


const Product = (props) => {
	let { _id, title, img, price, inStock } = props.product;
	const dispatch = useDispatch();

	const deletehandler = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			cancelButtonColor: '#d33',
			confirmButtonColor: '#3085d6',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(deleteProduct(id));
				Swal.fire(
					'Deleted!',
					'Your file has been deleted.',
					'success'
				);
			}
		}
	)
}
	return (
		<>
			<tr>
				<td>{title}</td>
				<td><img src={img} /></td>
				<td>{price}</td>
				<td>{inStock ? 'Yes' : 'Empty'}</td>
				<td><Link
					to={`/product/edit/${_id}`}
				>
					<i className="fa fa-edit"></i>
				</Link>
					<Link
						to="#"
						onClick={() => deletehandler(_id)}
					>
						<i className="fa fa-trash"></i>
					</Link>
				</td>
			</tr>
		</>
	)
}

export default Product;