desc "Build jekyll - production"
task :build do
  puts "\n## Buildind jekyll on production environment"
  status = system("JEKYLL_ENV=production bundle exec jekyll build")
  puts status ? "Success" : "Failed"
end

desc "Build jekyll - development"
task :build_dev do
  puts "\n## Buildind jekyll on development environment"
  status = system("bundle exec jekyll build")
  puts status ? "Success" : "Failed"
end

