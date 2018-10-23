/**
 * 
 * This module is optional if we decide to use svg sprite sheets 
 */
function requireAll(r) {
    r.keys().forEach(r);
}
requireAll(require.context('../../../icons/', true, /\.svg$/));
