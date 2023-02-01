export function WorkersPage(props){
    const {p, setp} = props;
    if (p.role === "ADMIN"){
        return(
            <div>hello master</div>
        );
    }

    if (p.role === "ADMIN"){
        return(
            <div>hello master</div>
        );
    }

    if (p.role === "ADMIN"){
        return(
            <div>hello master</div>
        );
    }
    return(
      <div>there was a fault with your role, please contact the admin</div>
    );
}