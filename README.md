# Umbraco Layout Editor

[![NuGet release](https://img.shields.io/nuget/v/JMMJ.LayoutEditor.svg)](https://www.nuget.org/packages/JMMJ.LayoutEditor)
[![Our Umbraco project page](https://img.shields.io/badge/our-umbraco-orange.svg)]()

The Layout Editor is used to construct modular site content in a flexible WYSIWYG editor based on Umbraco Macros.

## Getting Started

This package is supported on Umbraco 7.4+.

### Installation

The Layout Editor package is available from NuGet, Our Umbraco, or directly from GitHub repository.

#### Our Umbraco

A downloadable Umbraco package is available on the [Our Umbraco](https://our.umbraco.org/projects/website-utilities/layouteditor/). You can install it by Umbraco backoffice.

#### NuGet package

To install from [NuGet](https://www.nuget.org/packages/JMMJ.LayoutEditor/), run the following command in your Visual Studio package manager console.

    PM> Install-Package JMMJ.LayoutEditor

## Usage

[DataType]: https://raw.githubusercontent.com/JMMJsoftware/LayoutEditor/master/Docs/img/data-type.jpg "Data Type"
[DocType]: https://raw.githubusercontent.com/JMMJsoftware/LayoutEditor/master/Docs/img/document-type.jpg "Document Type"
[MacroDialog]: https://raw.githubusercontent.com/JMMJsoftware/LayoutEditor/master/Docs/img/macro-dialog.jpg "Macro Dialog"
[PropertyEditor]: https://raw.githubusercontent.com/JMMJsoftware/LayoutEditor/master/Docs/img/property-editor.jpg "Property Editor"

After installing the package you need to create create a new Data Type based on LayoutEditor via the Umbraco backoffice.

![Data Type][DataType]

In the next step add LayoutEditor Data Type as a property in your Document Type.

![Document Type][DocType]

Then add yours Macros to Layout Editor.

![Macro Dialog][MacroDialog]

### Important

To properly render layout in backoffice (same as in front-end), add yours stylesheet link at "_/Partials/LayoutEditor/_Component.cshtml_" partial.

At the end plug Layout Editor property in a template by adding _@using JMMJ.LayoutEditor.Helpers_ and below code:

```c#
@Html.LayoutEditor(Model.Content, "propertyAlias")
```

#### Result:
![Property Editor][PropertyEditor]

## License

Copyright &copy; 2018 [JMMJ s.c.](http://jmmj.software/), and other contributors

Licensed under the MIT License.
