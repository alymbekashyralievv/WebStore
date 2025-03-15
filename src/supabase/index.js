import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kwsbfojoauoitnqomjvk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3c2Jmb2pvYXVvaXRucW9tanZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwNTkyNDcsImV4cCI6MjA1NjYzNTI0N30.bH3y3QK5nnmHfEFgFIyKO43CgrcW7Adkm_LZGImySR0";

export const supabase = createClient(supabaseUrl, supabaseKey);

/*
catalog = {
id: 3,
name: "Laptops"
}
*/

/*
products = {
id:1,
catalog_id: 3
name: "Acer",
}
products = {
id:2,
catalog_id: 3
name: "Lenovo",
}

sup_products = {
products_id: 

}
*/