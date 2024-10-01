# ilw-profile-card

Links: **[ilw-profile-card in Builder](https://builder3.toolkit.illinois.edu/component/ilw-profile-card/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

This is a profile card specifically tailored to display a person's profile, such as a faculty member, student, or
staff member. It uses `ilw-card` as a base and adds specific slots and styling.

The profile card can be controlled with the following attributes:

- `round` clips the image into a round shape.
- The aspect ratio of the `image` slot can be forced using `aspectratio`, for example `aspectratio="3/2"`.
- `theme` can be `white` (default) or `gray`.

### Slots

| Slot              | Description                                                                                                          |
|-------------------|----------------------------------------------------------------------------------------------------------------------|
| `slot="image"`    | Placed at the top of the card, either full-width, or centered when `round`.                                          |
| `slot="name"`     | Below the image, this must be a heading of the appropriate level, with or without a link.                            |
| `slot="title"`    | A title or short description shown below the name.                                                                   |
| `slot="address"`  | Displayed using a map marker icon. This can be an address or some other form of location, such as a department name. |
| `slot="phone"`    | Shown as a phone number with a phone icon.                                                                           |
| `slot="email"`    | Shown as an email address with an email icon.                                                                        |
| `slot="hours"`    | A click icon that can be used for office hours.                                                                      |
| `slot="linkedin"` | LinkedIn link.                                                                                                       |
| `slot="x"`        | X (Twitter) link.                                                                                                    |
| `slot="facebook"` | Facebook link.                                                                                                       |
| `slot="news"`     | A news icon for linking to news feeds or articles.                                                                   |
| `slot="hr"`       | HR icon for human resource links.                                                                                    |

Any additional content without a specific slot is shown below the slotted content, at the bottom of the card.

## Code Examples

```html
<ilw-profile-card>
    <img src="https://picsum.photos/320/200" alt="Photo of First Last in front of the Illini Union." slot="image">
    <h2 slot="name"><a href="#">First & Last Name</a></h2>
    <p slot="title">Job Title or Description</p>
    <div slot="address">
        <p>110A Education</p>
        <p>M/C 708</p>
    </div>
    <p slot="phone"><a href="#">217-333-0000</a></p>
    <p slot="email "><a href="#">example@illinois.edu</a></p>
</ilw-profile-card>
```

## Accessibility Notes

- Make sure to use the **correct heading level** for the cards based on the rest of your page, if including a heading
  tag.
- The image will get reordered in the document to be below the unslotted content so it comes after the heading with
  the name. Including a descriptive alt text for the image is recommended.
- The following icons have alt text: address, phone, email, hours and HR. The others typically have a
  descriptive link text that would make the alt text repetitive (e.g. "Facebook graphic facebook link").

## External References

- https://bbc.github.io/gel/components/cards/