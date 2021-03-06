# Umbraco Layout Editor

[![NuGet release](https://img.shields.io/nuget/v/JMMJ.LayoutEditor.svg)](https://www.nuget.org/packages/JMMJ.LayoutEditor)
[![Our Umbraco project page](https://img.shields.io/badge/our-umbraco-orange.svg)](https://our.umbraco.org/projects/website-utilities/layout-editor/)

The Layout Editor is used to construct modular site content in a flexible WYSIWYG editor based on Umbraco Macros.

## Getting Started

This package is supported on Umbraco 7.4+.

### Installation

The Layout Editor package is available from NuGet, Our Umbraco, or directly from GitHub repository.

#### Our Umbraco

A downloadable Umbraco package is available on the [Our Umbraco](https://our.umbraco.org/projects/website-utilities/layout-editor/). You can install it by Umbraco backoffice.

#### NuGet package

To install from [NuGet](https://www.nuget.org/packages/JMMJ.LayoutEditor/), run the following command in your Visual Studio package manager console.

    PM> Install-Package JMMJ.LayoutEditor

## Usage

[DataType]: https://raw.githubusercontent.com/JMMJsoftware/LayoutEditor/master/Docs/img/data-type.jpg "Data Type"
[DocType]: https://raw.githubusercontent.com/JMMJsoftware/LayoutEditor/master/Docs/img/document-type.jpg "Document Type"
[MacroDialog]: https://raw.githubusercontent.com/JMMJsoftware/LayoutEditor/master/Docs/img/macro-dialog.jpg "Macro Dialog"
[PropertyEditor]: https://raw.githubusercontent.com/JMMJsoftware/LayoutEditor/master/Docs/img/property-editor.jpg "Property Editor"

After installing the package you need to create a new Data Type based on LayoutEditor via the Umbraco backoffice.

![Data Type][DataType]

In the next step add LayoutEditor Data Type as a property in your Document Type.

![Document Type][DocType]

Then add yours Macros to Layout Editor.

![Macro Dialog][MacroDialog]

### Important

To render layout in the backoffice properly (same as in the front-end), add your stylesheet link to the "_/Partials/LayoutEditor/_Component.cshtml_" partial.

In the end plug Layout Editor property in a template by adding _@using JMMJ.LayoutEditor.Helpers_ and insert the code below:

```c#
@Html.LayoutEditor(Model.Content, "propertyAlias")
```

#### Result:
![Property Editor][PropertyEditor]

## License

Copyright &copy; 2018 [JMMJ](http://jmmj.software/), and other contributors

Licensed under the MIT License.
