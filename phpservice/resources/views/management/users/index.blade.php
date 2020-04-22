@extends('management.layout')

@section('title', 'Index')

@section('sidebar')
    @parent
    <nav class="navbar navbar-expand-lg" id="navbar-management">
        <a class="navbar-brand" href="#">Dashboard</a>
        <div class="collapse navbar-collapse" >
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Users <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Category</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Product</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item">
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-primary|secondary|success|danger|warning|info|light|dark my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </li>
            </ul>
        </div>
    </nav>
@endsection
@section('content')
<div class="container">
	<div class="container">
		<div class="row">
	
			<div class="col-sm-5 col-md-5 col-lg-5 col-xl-5">
				<form>
			    	<fieldset class="form-group">
			    		<label for="exampleInputEmail1">Nhập Tên</label>
			    		<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
			    		<small class="text-muted">We'll never share your email with anyone else.</small>
			    	</fieldset>
			    	<fieldset class="form-group">
			    		<label for="exampleInputPassword1">Nhập Email</label>
			    		<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter email">
			    	</fieldset>
			    	<fieldset class="form-group">
			    		<label for="exampleInputPassword1">Nhập Số Điện Thoại</label>
			    		<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter email">
			    	</fieldset>
			    	<fieldset class="form-group">
			    		<label for="exampleInputPassword1">Nhập Ngày Sinh</label>
			    		<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter email">
			    	</fieldset>
			    	<fieldset class="form-group">
			    		<label for="exampleInputPassword1">Giới Tính </label>
			    		<div class="radio">
				    		<label>
				    			<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
				    			Nam
				    		</label>
				    	</div>
				    	<div class="radio">
				    		<label>
				    			<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
				    			Nữ
				    		</label>
				    	</div>
			    	</fieldset>
			    	<fieldset class="form-group">
			    		<label for="exampleSelect1">Chọn Bộ Phận</label>
			    		<select class="form-control" id="eexampleSelect11">
			    			<option>1</option>
			    			<option></option>
			    			<option></option>
			    			<option></option>
			    			<option></option>
			    		</select>
			    	</fieldset>
			    	<fieldset class="form-group">
			    		<label for="exampleTextarea">Địa chị cư trú</label>
			    		<textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
			    	</fieldset>
			    	<fieldset class="form-group">
			    		<label for="exampleInputFile">Anh Chân Dung</label>
			    		<input type="file" class="form-control-file" id="exampleInputFile">
			    	</fieldset>
			    	<button type="submit" class="btn btn-primary">Submit</button>
			    </form>
			</div>
		<div class="col-sm-7 col-md-7 col-lg-7 col-xl-7">
			<table class="table table-bordered">
			  <thead>
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">First</th>
			      <th scope="col">Last</th>
			      <th scope="col">Handle</th>
			      <th scope="col">Handle</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <th scope="row">1</th>
			      <td>Mark</td>
			      <td>Otto</td>
			      <td>@mdo</td>
			      <td>@fat</td>
			    </tr>
			    <tr>
			      <th scope="row">2</th>
			      <td>Jacob</td>
			      <td>Thornton</td>
			      <td>@fat</td>
			      <td>@fat</td>
			    </tr>
			    <tr>
			      <th scope="row">3</th>
			      <td>Larry the Bird</td>
			      <td>Larry the Bird</td>
			      <td>Larry the Bird</td>
			      <td>@twitter</td>
			    </tr>
			  </tbody>
			</table>
		</div>
		</div>
	</div>
</div>	
@endsection
