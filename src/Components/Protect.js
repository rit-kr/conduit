import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protect(props) {
  const navigate = useNavigate();
  let Cmp = props.Cmp;
    useEffect(() => {
        if(!localStorage.getItem('user-info')){
            navigate('/login');
        }
    },[])
    return (
      <div>
        <Cmp />

      </div>
    );
  }