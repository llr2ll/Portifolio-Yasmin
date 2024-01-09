import { BiBookBookmark, BiCodeBlock } from 'react-icons/bi';
import {RiGalleryLine} from 'react-icons/ri';
import {FiSmartphone} from 'react-icons/fi';
import { FaRegUser } from "react-icons/fa";
import './nav.css';

export function Nav() {   
  return <nav className='nav fade'>
    <a href="#home"><FaRegUser /></a>
    <a href="#certificates"><RiGalleryLine /></a>
    <a href="#skills"><BiBookBookmark /></a>
    <a href="#contact"><FiSmartphone /></a>
  </nav>
}