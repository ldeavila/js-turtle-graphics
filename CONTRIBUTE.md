# How to Contribute

## Making Edits to js-turtle-graphics
1. [Fork](https://github.com/ldeavila/js-turtle-graphics/fork) then
   clone `git https://github.com/ldeavila/js-turtle-graphics.git` js-turtle-graphics repository
2. Create a new branch in your personally forked repo, with a name similar to your edits, such as `fix-turtle-rotation`
3. Make your edits inside your new branch
4. Run `gulp` (this runs the `eslint` task) and ensure that no warnings are generated.
5. Commit them and push them back to your personal github fork making sure your git comment has a detailed what and why a change was made, such as `updated rotate function because rotation math was incorrect by 45`
6. Make a new [Pull Request](https://github.com/ldeavila/js-turtle-graphics/compare/) on the js-turtle-graphics repo. Point your branch to the `master` js-turtle-graphics branch and submit

## IDE Configuration
Having a common code style is an important part of a high-quality codebase that is more easily maintainable and supportable. js-turtle-graphics utilizes `.editorconfig`
for enforcing code indentation.

1. Configure your IDE to use `.editorconfig`
