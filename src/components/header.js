function Header(props)
{
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><b>SHOPPING CART</b></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
     
      
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
      <i class="fa-solid fa-cart-shopping"><b>CART</b>
      <sup><b>{props.count}</b></sup>
      </i>
      </button>
    </form>
  </div>
</nav>
        </>
    );
}
export default Header;