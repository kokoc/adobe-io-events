(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7830],{21950:function(e,a,t){"use strict";t.r(a),t.d(a,{_frontmatter:function(){return m},default:function(){return h}});var o=t(22122),n=t(19756),r=(t(15007),t(64983)),s=t(99536),i=["components"],m={},d={_frontmatter:m},p=s.Z;function h(e){var a=e.components,t=(0,n.Z)(e,i);return(0,r.mdx)(p,(0,o.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"glossary"},"Glossary"),(0,r.mdx)("h3",{id:"acl-policy-resource"},"ACL Policy Resource"),(0,r.mdx)("p",null,"The Access Control List of the ",(0,r.mdx)("a",{parentName:"p",href:"#asset"},"asset"),". Access Control is a method of controlling who is permitted or denied which operation on what resource."),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"asset"},"Asset"),(0,r.mdx)("p",null,"An item of content and data about that content, bound together under a single identifier and with a common lifetime. Assets, in turn, are organized into hierarchical namespaces, and each namespace is managed by a ",(0,r.mdx)("a",{parentName:"p",href:"#repository"},"repository"),". The platform defines three classes of assets: ",(0,r.mdx)("a",{parentName:"p",href:"#file"},"files"),", ",(0,r.mdx)("a",{parentName:"p",href:"#composite"},"composites"),", and ",(0,r.mdx)("a",{parentName:"p",href:"#directory"},"directories"),"."),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"component"},"Component"),(0,r.mdx)("p",null,"A unit of content storage within a ",(0,r.mdx)("a",{parentName:"p",href:"#composite"},"composite"),". components are the individual files that, collectively, contain the majority of the content in a typical composite. As the atomic units of composites, each Component should contain data in a single media type.\ncomposites typically contain tens, hundreds, or thousands of components bound together via a ",(0,r.mdx)("a",{parentName:"p",href:"#manifest"},"manifest"),"."),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"composite"},"Composite"),(0,r.mdx)("p",null,"An ",(0,r.mdx)("a",{parentName:"p",href:"#asset"},"asset")," stored in a composite format instead of a traditional, single-file format. composite formats organize content as a set of ",(0,r.mdx)("a",{parentName:"p",href:"#component"},"components")," bound together with a ",(0,r.mdx)("a",{parentName:"p",href:"#manifest"},"manifest"),". These formats are built on top of the Digital composite Technology DCX framework, which describes both the organization of the components as well as the transfer and synchronization algorithms used to operate on them."),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"dcx-snapshot"},"DCX Snapshot"),(0,r.mdx)("p",null,"The single-file representation of a ",(0,r.mdx)("a",{parentName:"p",href:"#composite"},"composite"),", stored as a ",(0,r.mdx)("a",{parentName:"p",href:"#universal-container-format-ucf"},"Universal Container Format (UCF)")," package. A Snapshot contains the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"MIME-type file, which contains the media type of the Snapshot. This file does not have an extension."),(0,r.mdx)("li",{parentName:"ul"},"manifest file, which is the ",(0,r.mdx)("a",{parentName:"li",href:"#manifest"},"manifest"),". This file does not have an extension."),(0,r.mdx)("li",{parentName:"ul"},"files and folders containing the ",(0,r.mdx)("a",{parentName:"li",href:"#component"},"components"),", which are all stored according to their full paths.")),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"directory"},"Directory"),(0,r.mdx)("p",null,"An ",(0,r.mdx)("a",{parentName:"p",href:"#asset"},"asset")," that serves as a container for other assets in the namespace maintained by a ",(0,r.mdx)("a",{parentName:"p",href:"#repository"},"repository"),". Every directory itself is either contained in exactly one other directory, or is the root directory of a repository."),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"embedded-metadata-resource"},"Embedded Metadata Resource"),(0,r.mdx)("p",null,"The Embedded Metadata Resource provides a view into the metadata that is embedded in the ",(0,r.mdx)("a",{parentName:"p",href:"#primary-resource"},"Primary Resource")," of a ",(0,r.mdx)("a",{parentName:"p",href:"#file"},"file")," or ",(0,r.mdx)("a",{parentName:"p",href:"#composite"},"composite"),". This takes the form of Extensible Metadata Platform (XMP) metadata."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note"),": ",(0,r.mdx)("a",{parentName:"p",href:"#directory"},"Directories")," do not contain embedded metadata."),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"file"},"File"),(0,r.mdx)("p",null,"Any ",(0,r.mdx)("a",{parentName:"p",href:"#asset"},"asset")," that is not a ",(0,r.mdx)("a",{parentName:"p",href:"#directory"},"directory")," or a ",(0,r.mdx)("a",{parentName:"p",href:"#composite"},"composite"),". When an asset is created, it will be a file unless it has media type ",(0,r.mdx)("inlineCode",{parentName:"p"},"application/vnd.adobecloud.directory+json")," (for directories) or either of the structured suffixes ",(0,r.mdx)("inlineCode",{parentName:"p"},"+dcx")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"+dcxucf"),", which indicate composites."),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"manifest"},"Manifest"),(0,r.mdx)("p",null,"A JSON file that ties together a ",(0,r.mdx)("a",{parentName:"p",href:"#composite"},"composite"),". A manifest contains the ",(0,r.mdx)("a",{parentName:"p",href:"#structure-nodes"},"structure nodes")," that reference all the components of a composite."),(0,r.mdx)("hr",null),(0,r.mdx)("p",null,"The elements that make up the structure tree of a ",(0,r.mdx)("a",{parentName:"p",href:"#composite"},"composite"),". Most composites have some internal structure; for example, a sketchbook is organized into pages, and an image may be composed of a hierarchy of layers. Nodes are recorded in the ",(0,r.mdx)("a",{parentName:"p",href:"#manifest"},"manifest")," as JSON objects, and represent the pages, layers, or other structural elements that constitute a composite. composites always have at least one node (referred to as the ",(0,r.mdx)("em",{parentName:"p"},"root node"),"), and each node contains references to ",(0,r.mdx)("a",{parentName:"p",href:"#component"},"components"),", as well as child nodes."),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"primary-resource"},"Primary Resource"),(0,r.mdx)("p",null,"The role and function of the Primary Resource varies between different ",(0,r.mdx)("a",{parentName:"p",href:"#asset"},"asset")," classes. For ",(0,r.mdx)("a",{parentName:"p",href:"#file"},"files"),", the Primary Resource contains the data associated with the file. For ",(0,r.mdx)("a",{parentName:"p",href:"#directory"},"directories"),", the Primary Resource contains a JSON representation of the directory contents. For ",(0,r.mdx)("a",{parentName:"p",href:"#composite"},"composites"),", the Primary Resource contains a representation of the composite as a ",(0,r.mdx)("a",{parentName:"p",href:"#dcx-snapshot"},"DCX Snapshot"),"."),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"rendition-resource"},"Rendition Resource"),(0,r.mdx)("p",null,"A rendition is a representation of an ",(0,r.mdx)("a",{parentName:"p",href:"#asset"},"asset"),", typically containing less data than the ",(0,r.mdx)("a",{parentName:"p",href:"#asset"},"asset")," from which it is derived. The prototypical example of a rendition is the thumbnail of an image, which is usually a lossy and smaller version of the original image."),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"resource"},"Resource"),(0,r.mdx)("p",null,"The expression of the content and data within an ",(0,r.mdx)("a",{parentName:"p",href:"#asset"},"asset"),". Resources are the addressable unit in the platform: they have a URI, and HTTP operations can be applied to them. There are multiple content and data resources associated with each asset."),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"repository"},"Repository"),(0,r.mdx)("p",null,"A partition of content organized in a namespace hierarchy, analogous to a volume or drive in desktop operating systems."),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"repository-metadata-resource"},"Repository Metadata Resource"),(0,r.mdx)("p",null,"A ",(0,r.mdx)("a",{parentName:"p",href:"#resource"},"resource")," that contains metadata about an ",(0,r.mdx)("a",{parentName:"p",href:"#asset"},"asset")," as maintained by a ",(0,r.mdx)("a",{parentName:"p",href:"#repository"},"repository"),"."),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"universal-container-format-ucf"},"Universal Container Format (UCF)"),(0,r.mdx)("p",null,"A general-purpose container technology that collects a related set of files into a single-file container. UCF is based on the widely used ZIP archival format, and conforms to the OEBPS Container Format guidelines, as well as the Open Document Format 1.0 specification. Off-the-shelf ZIP tools can be used to open, inspect, and extract files from UCF packages."),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"versions-resource"},"Versions Resource"),(0,r.mdx)("p",null,"The Versions Resource provides the set of all available versions of an ",(0,r.mdx)("a",{parentName:"p",href:"#asset"},"asset"),"."),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"xdm"},"XDM"),(0,r.mdx)("p",null,"The Experience Data Model (XDM) is a technology for modeling data used at Adobe, along with associated models. It is a stylized use of ",(0,r.mdx)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON Schema")," and ",(0,r.mdx)("a",{parentName:"p",href:"https://json-ld.org/"},"JSON-LD"),", and is a publicly documented specification, made available under a Creative Commons license."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-using-asset-events-asset-events-glossary-md-62c1adae912b2ffebabc.js.map