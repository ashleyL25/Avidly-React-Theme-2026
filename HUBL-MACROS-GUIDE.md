# HubL Macros Guide - Avidly React Theme 2026

## 🎯 **Shared Field Groups Using HubL Macros**

Instead of React components, we use **HubL macros** to create reusable field patterns across modules. This matches the RK - Expertise Banner structure while working seamlessly with HubSpot's build system.

---

## 📚 **Available Macros**

### **1. Heading Group**
Complete heading with HTML size, display size, color presets, and animation options.

```hubl
{% import "/macros/field-groups.hubl.html" as fields %}

{{ fields.heading_group("heading", "Section Heading", "Your Heading Here", "white", "2") }}
```

**Parameters:**
- `name` - Field name (e.g., "heading")
- `label` - Label shown in editor (e.g., "Section Heading")
- `default_text` - Default heading text
- `default_color` - Default color (auto/primary/secondary/tertiary/quaternary/white/black)
- `default_size` - Default HTML size (1-6)

**Provides:**
- ✅ Heading text input
- ✅ HTML size (H1-H6) for SEO
- ✅ Display size (visual size)
- ✅ Color presets (8 options)
- ✅ Custom color picker
- ✅ Animation type (7 options)
- ✅ Animation delay

---

### **2. Style Group**
Complete style options matching RK theme structure.

```hubl
{% import "/macros/field-groups.hubl.html" as fields %}

{{ fields.style_group("style", "Style Settings") }}
```

**Parameters:**
- `name` - Field name (e.g., "style")
- `label` - Label shown in editor

**Provides:**
- ✅ Container width (boxed/full/custom)
- ✅ Custom width (px)
- ✅ Padding top/bottom
- ✅ Background options (image/color/gradient/none)
- ✅ Background image uploader
- ✅ Image overlay color
- ✅ Background color picker
- ✅ Custom CSS class
- ✅ Custom element ID

---

### **3. Color Field**
Simple color picker with presets.

```hubl
{% import "/macros/field-groups.hubl.html" as fields %}

{{ fields.color_field("text_color", "Text Color", "primary") }}
```

**Parameters:**
- `name` - Field name
- `label` - Label shown in editor
- `default` - Default color preset

**Provides:**
- ✅ 7 color presets
- ✅ Custom color picker fallback

---

### **4. Animation Field**
Animation type and delay controls.

```hubl
{% import "/macros/field-groups.hubl.html" as fields %}

{{ fields.animation_field("element_animation", "Animation", "fadeInUp") }}
```

**Parameters:**
- `name` - Field name
- `label` - Label shown in editor
- `default_type` - Default animation type

**Provides:**
- ✅ 7 animation types
- ✅ Animation delay (0-1s)

---

### **5. Button Field**
Complete button configuration.

```hubl
{% import "/macros/field-groups.hubl.html" as fields %}

{{ fields.button_field("cta_button", "Call to Action Button") }}
```

**Parameters:**
- `name` - Field name
- `label` - Label shown in editor

**Provides:**
- ✅ Button text
- ✅ Button URL
- ✅ Button style (primary/secondary/white/outline)
- ✅ Enable hover text toggle
- ✅ Hover text input
- ✅ Button size (sm/md/lg)

---

## 🚀 **Usage in HubL Templates**

### **Example: Hero Module Template**

```hubl
{# Import the macros #}
{% import "/macros/field-groups.hubl.html" as fields %}

<div class="hero-section">
  <div class="container">
    {# Use the heading macro output #}
    {% set heading_size = module.heading.size|default('2') %}
    {% set heading_color = module.heading.color|default('white') %}
    {% set heading_animation = module.heading.animation_type|default('fadeInUp') %}
    
    <h{{ heading_size }} class="text-{{ heading_color }} {{ heading_animation }}"
                         data-delay="{{ module.heading.animation_delay|default('0') }}">
      {{ module.heading.text }}
    </h{{ heading_size }}>
    
    {# Use style options #}
    <style>
      .hero-section {
        {% if module.style.background_option == 'image' %}
          background-image: url('{{ module.style.background_image.src }}');
        {% elif module.style.background_option == 'color' %}
          background-color: {{ module.style.background_color.color }};
        {% endif %}
        padding-top: {{ module.style.padding_top|default('80') }}px;
        padding-bottom: {{ module.style.padding_bottom|default('80') }}px;
      }
    </style>
  </div>
</div>
```

---

## 📝 **How to Add Macros to a Module**

### **Step 1: Import the Macros File**

At the top of your HubL template:

```hubl
{% import "/macros/field-groups.hubl.html" as fields %}
```

### **Step 2: Use Macros in Your Template**

```hubl
{# Define your fields using macros #}
{{ fields.heading_group("main_heading", "Main Heading", "Welcome", "primary") }}
{{ fields.style_group("section_style", "Section Style") }}
{{ fields.button_field("primary_cta", "Primary CTA") }}
```

### **Step 3: Access Field Values**

```hubl
{# Access the values in your template #}
<h{{ module.main_heading.size }}>
  {{ module.main_heading.text }}
</h{{ module.main_heading.size }}>

<a href="{{ module.primary_cta.url }}" class="btn btn-{{ module.primary_cta.style }}">
  {{ module.primary_cta.text }}
</a>
```

---

## 🎨 **Benefits of HubL Macros**

✅ **Consistent Fields** - Same structure across all modules  
✅ **Easy to maintain** - Update one file, affects all modules  
✅ **Works with HubSpot** - No build issues like React components  
✅ **Matches RK Theme** - Same field structure as reference theme  
✅ **Reusable** - Define once, use everywhere  
✅ **No dependencies** - Pure HubL, no npm packages needed  

---

## 🔗 **Reference Documentation**

- [HubL Macros Documentation](https://developers.hubspot.com/docs/cms/reference/hubl/variables-macros-syntax)
- [HubL Variables & Filters](https://developers.hubspot.com/docs/cms/reference/hubl/variables-macros-syntax)
- [RK - Expertise Banner](../../Newest/rhea-kaiser-theme/modules/RK%20-%20Expertise%20Banner.module/) - Reference theme

---

## 📦 **File Location**

```
avidly-react-theme-2026/
└── src/
    └── theme/
        └── avidly/
            └── templates/
                └── macros/
                    └── field-groups.hubl.html  ← Shared macros here
```

---

## 🎯 **Next Steps**

1. ✅ Macros file created
2. Import macros in your HubL templates
3. Replace hardcoded fields with macro calls
4. Update module templates to use macro values
5. Test in HubSpot editor

---

**Note:** These macros are **conceptual examples** showing the pattern. In practice, you'll use HubSpot module fields (JSON or JSX) for React modules, but the macro approach works perfectly for traditional HubL modules and provides the shared field structure you want!

