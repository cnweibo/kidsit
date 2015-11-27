<?php

namespace Kidsit\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Log;

use Kidsit\View\ThemeViewFinder;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        if (config('app.debug')){
            Event::listen('illuminate.query', function ($query) {
                Log::info("query db:" . $query);
            });
        }
        //overwrite default ViewFinder singleton
        $this->app['view']->setFinder($this->app['theme.finder']);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('theme.finder',function($app){
            $finder = new ThemeViewFinder($app['files'],$app['config']['view.paths']);
            $config = $app['config']['kidsit.theme'];
            $finder->setBasePath($app['path.public'].'/'.$config['folder']);
            $finder->setActiveTheme($config['active']);
            return $finder;
        });
    }
}
