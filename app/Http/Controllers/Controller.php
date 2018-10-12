<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller as BaseController;
use Spatie\Fractal\Fractal;
use Spatie\Fractalistic\ArraySerializer;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * Generic JSON response.
     *
     * @param  array $data
     * @param int $status
     * @param  array $headers
     * @return JsonResponse
     */
    public function response($data = [], $status = 200, $headers = [])
    {
        return new JsonResponse($data, $status, $headers);
    }

    /**
     * Response OK (200).
     *
     * @param array $data
     * @param array $headers
     * @return JsonResponse
     */
    public function responseOk($data = [], $headers = [])
    {
        return $this->response($data, 200, $headers);
    }

    /**
     * Response Created (201).
     *
     * @param array $data
     * @param array $headers
     * @return JsonResponse
     */
    public function responseCreated($data = [], $headers = [])
    {
        return $this->response($data, 201, $headers);
    }

    /**
     * Response Bad Request (400).
     *
     * @param  array $data
     * @param  array $headers
     * @return \Illuminate\Http\JsonResponse
     */
    public function responseBadRequest($data = [], $headers = [])
    {
        return $this->response($data, 400, $headers);
    }

    /**
     * Response Unauthorized (401).
     *
     * @param  array $data
     * @param  array $headers
     * @return \Illuminate\Http\JsonResponse
     */
    public function responseUnauthorized($data = [], $headers = [])
    {
        return $this->response($data, 401, $headers);
    }

    /**
     * Response forbidden (403).
     *
     * @param  array $data
     * @param  array $headers
     * @return \Illuminate\Http\JsonResponse
     */
    public function responseForbidden($data = [], $headers = [])
    {
        return $this->response($data, 403, $headers);
    }

    /**
     * Response Not Found (404).
     *
     * @param  array $data
     * @param  array $headers
     * @return \Illuminate\Http\JsonResponse
     */
    public function responseNotFound($data = [], $headers = [])
    {
        return $this->response($data, 404, $headers);
    }

    /**
     * @param $data
     * @param $transformer
     * @return \Spatie\Fractalistic\Fractal
     */
    public function refactorTransformer($data, $transformer)
    {
        return Fractal::create($data, $transformer, new ArraySerializer());
    }
}
