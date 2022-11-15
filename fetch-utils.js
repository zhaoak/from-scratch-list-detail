const SUPABASE_URL = 'https://sagftzksyhlnwvwqislb.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZ2Z0emtzeWhsbnd2d3Fpc2xiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgxMzcsImV4cCI6MTk4MzY4NDEzN30.YKP0xHsE1Oo9sKmU0QIHWN5YTQFCCQYfW4p1zJ1iOtw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchBreeds() {
    // return list of all breeds
    const query = client.from('cat_breeds').select('*').limit(100);
    const response = await query;
    if (response.error) {
        return -1;
    }
    return response.data;
}

export async function fetchBreedData(id) {
    // find single breed matching id from arg
    const query = client.from('cat_breeds').select().match({ id: id }).single();
    const response = await query;
    if (response.error) {
        return -1;
    }
    return response.data;
}
