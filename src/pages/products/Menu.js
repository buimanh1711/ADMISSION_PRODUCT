import { useDispatch, useSelector } from "react-redux"
import { getAllProductsAsync } from "../../redux/actions"
import toChar from "../../utils/toChar"

const ProductMenu = ({ setCreateForm }) => {
  const dispatch = useDispatch()
  const login = useSelector(state => state.global.login)

  return (
    <div id='product-menu'>
      <div className='product-menu-container'>
        <ul>
          {
            login &&
            <li className='add'>
              <button onClick={() => setCreateForm(true)}>
                <i className="fas fa-plus"></i>
                <span>
                  Thêm chuyện ngành mới
              </span>
              </button>
            </li>
          }
        </ul>
      </div>
    </div>
  )
}

export default ProductMenu