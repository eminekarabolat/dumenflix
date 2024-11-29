const devUrl = 'http://localhost:9090/v1/dev';

const server = devUrl;

const apis = {
    moviecardService: server + '/movie',
    userService: server + '/user',
    movieDetailsService: server + '/movie-details'
}
export default apis;