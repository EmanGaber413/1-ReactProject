import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faFacebook, faXTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return<>
  <footer className='blog-footer'>
    <div >
        <ul className='d-flex list-unstyled gap-2 justify-content-center p-2'>
            <li>
                <a  href="" aria-description='face book' target='-blank' className='text-light'
                 rel="noopener noreferrer" ><FontAwesomeIcon icon={faFacebook}  />
                </a>
            </li>
            <li>
                <a  href="" aria-description='face book' target='-blank'className='text-light'
                 rel="noopener noreferrer" ><FontAwesomeIcon icon={faYoutube}  />
                </a>
            </li>
            <li>
                <a  href="" aria-description='face book' target='-blank'className='text-light'
                 rel="noopener noreferrer" ><FontAwesomeIcon icon={faXTwitter}  />
                </a>
            </li>
        </ul>
    </div>
    <div>
        <p className="bg-info pb-2 fs-6 text-light d-flex justify-content-center">&copy; 2025 Are Reserved  </p>
    </div>
  </footer>
  
  
  </>
}
