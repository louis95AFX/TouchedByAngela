import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://dyetymjohesrlmjsxvwg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5ZXR5bWpvaGVzcmxtanN4dndnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3OTg4NjMsImV4cCI6MjA2MzM3NDg2M30.XTjVHwWso1gzJAmTxYKTlq9hrr-sG7rQixeJC1rkCBM';

export const supabase = createClient(supabaseUrl, supabaseKey);
