@extends('management.layout')

@section('title', 'Index')

@section('sidebar')
    @parent
@endsection
@section('content')
    <div class="shadow-none p-3 mb-5 bg-light rounded d-flex">
        <div class="m-1 w-25">
            <div class="container-fluid shadow-lg p-3 mb-5 bg-white rounded">
                <div class="row d-flex">
                    <div class="card text-center">
                        <div class="card-header">
                            Nhân viên
                        </div>
                        <div class="card-body w-100">
                            <h4 class="card-title">Special title treatment</h4>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        <div class="card-footer text-muted">
                            2 days ago
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="m-1 w-25">
            <div class="container-fluid shadow-lg p-3 mb-5 bg-white rounded">
                <div class="row d-flex">
                    <div class="card text-center">
                        <div class="card-header">
                            Tin nhắn
                        </div>
                        <div class="card-body w-100">
                            <ul class="list-group">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Morbi leo risus</li>
                            </ul>
                        </div>
                        <div class="card-footer text-muted">
                            2 days ago
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="m-1 w-25">
            <div class="container-fluid shadow-lg p-3 mb-5 bg-white rounded">
                <div class="row d-flex">
                    
                    <div class="card text-center">
                        <div class="card-header">
                            Tồn kho
                        </div>
                        <div class="card-body w-100">
                            <h4 class="card-title">Special title treatment</h4>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        <div class="card-footer text-muted">
                            2 days ago
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
