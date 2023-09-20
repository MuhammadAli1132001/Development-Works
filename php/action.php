<?php
// Assuming you have a directory structure where food images are stored in separate folders for each category
$imageDirectory = 'images/';

if (isset($_POST['category'])) {
    $category = $_POST['category'];

    // Check if the category folder exists
    if (is_dir($imageDirectory . $category)) {
        // Get all image files from the category folder
        $imageFiles = glob($imageDirectory . $category . '/*.{jpg,jpeg,png,gif}', GLOB_BRACE);

        // Generate the HTML for the food gallery
        $html = '';
        foreach ($imageFiles as $imageFile) {
            $html .= '<img src="' . $imageFile . '" alt="Food Image">';
        }

        echo $html;
    } else {
        echo 'No images found for the selected category.';
    }
}
?>
