import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const srcDir = "C:/Users/HP/.gemini/antigravity-ide/brain/28736e07-a921-4454-92c5-af426b951fbb";
    const destDir = path.join(process.cwd(), "public", "brand");

    fs.copyFileSync(
      path.join(srcDir, "category_women_1789478934256.jpg"),
      path.join(destDir, "category-women.jpg")
    );
    fs.copyFileSync(
      path.join(srcDir, "category_men_1789478955017.jpg"),
      path.join(destDir, "category-men.jpg")
    );
    fs.copyFileSync(
      path.join(srcDir, "category_living_1789478977405.jpg"),
      path.join(destDir, "category-unstitched.jpg")
    );

    return NextResponse.json({
      success: true,
      message: "Category images copied successfully!",
      files: ["category-women.jpg", "category-men.jpg", "category-unstitched.jpg"]
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
