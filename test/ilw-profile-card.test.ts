import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-profile-card";

const content = html`
    <ilw-profile-card>
        <img
            src="https://fastly.picsum.photos/id/1025/500/400.jpg?hmac=MPFZjsU2UG1Mr3SjMkYP2F9jnhQWyatt6soxbOj0TN4"
            alt="Photo of First Last in front of the Illini Union."
            slot="image"
        />
        <h2 slot="name"><a href="#">First & Last Name</a></h2>
        <p slot="title">Job Title or Description</p>
        <p slot="address">
            <span>110A Education</span>
        </p>
        <p slot="phone"><a href="#">217-333-0000</a></p>
        <p slot="email"><a href="#">example@illinois.edu</a></p>
    </ilw-profile-card>
`;

test("Renders name", async () => {
    const screen = render(content);
    const element = screen.getByText("First & Last Name");
    await expect.element(element).toBeVisible();
});