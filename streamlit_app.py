from pathlib import Path

import streamlit as st
import pandas as pd
from datetime import date

BASE_DIR = Path(__file__).resolve().parent
LOGO_PATH = BASE_DIR / "logo" / "GJ.jpeg"
BUSINESS_IMAGES = sorted(str(p) for p in BASE_DIR.glob("images/*") if p.is_file())

st.set_page_config(
    page_title="GJ Global Enterprises",
    page_icon="🌍",
    layout="wide",
    initial_sidebar_state="expanded",
)

st.title("GJ Global Enterprises")
st.subheader("Import & Export Solutions for Global Trade")

if LOGO_PATH.exists():
    st.image(str(LOGO_PATH), width=220)

st.markdown(
    """
    **GJ Global Enterprises** delivers end-to-end import and export services across agriculture, textiles, machinery, and consumer goods.
    We help businesses move shipments, manage documentation, and maintain transparent order tracking.
    """
)

with st.expander("Why choose GJ Global Enterprises?"):
    st.write(
        "- Efficient customs clearance support for imports and exports\n"
        "- Competitive freight and logistics planning\n"
        "- Global supplier and buyer network management\n"
        "- Professional documentation & compliance guidance"
    )

nav = st.sidebar.selectbox(
    "Navigate",
    ["Home", "Company Services", "Analytics Dashboard", "Quotation Request", "Order Tracking", "Contact"]
)

company_info = {
    "Registered Name": "GJ Global Enterprises",
    "Business Type": "Import & Export",
    "Headquarters": "India",
    "Core Markets": "Asia, Europe, Africa, Middle East",
    "Primary Goods": "Food Products, Textiles, Machinery, Electronics",
}

services = [
    "Customs Clearance",
    "Freight Forwarding",
    "Supplier Sourcing",
    "Quality Inspection",
    "Warehousing & Distribution",
    "Trade Documentation",
]

product_catalog = pd.DataFrame(
    [
        ["Spices", "Agriculture", "2903", "Available"],
        ["Cotton Fabric", "Textiles", "5208", "Available"],
        ["Industrial Pumps", "Machinery", "8413", "In Transit"],
        ["Solar Panels", "Electronics", "8541", "Ready to Export"],
    ],
    columns=["Product", "Category", "HS Code", "Status"],
)

sample_orders = pd.DataFrame(
    [
        ["GJ-001", "Cotton Fabric", "Mumbai", "Dubai", "Shipped", "2026-04-22"],
        ["GJ-002", "Solar Panels", "Chennai", "Nairobi", "Scheduled", "2026-05-03"],
        ["GJ-003", "Spices", "Kolkata", "Hamburg", "Clearing", "2026-04-26"],
    ],
    columns=["Order ID", "Product", "Origin", "Destination", "Status", "ETD"]
)

analytics_data = pd.DataFrame(
    {
        "Month": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        "Shipments": [24, 31, 27, 34, 29, 38],
        "Revenue": [45_000, 52_000, 48_000, 60_000, 55_000, 68_000],
        "On Time": [88, 91, 85, 93, 89, 94],
    }
)

status_data = pd.DataFrame(
    {
        "Status": ["Shipped", "Scheduled", "Clearing", "Pending"],
        "Count": [14, 7, 3, 6],
    }
)

if nav == "Home":
    st.header("Welcome to Your Global Trading Partner")
    st.write("Explore our services, request a quote, and track your shipment in one place.")
    st.subheader("Featured Products")
    st.dataframe(product_catalog, use_container_width=True)
    st.subheader("How we support your business")
    st.write(
        "We coordinate international logistics, manage customs paperwork, and connect you with trusted buyers and suppliers."
    )
    if BUSINESS_IMAGES:
        st.subheader("Our Business Showcase")
        st.image(BUSINESS_IMAGES, caption=[Path(p).stem for p in BUSINESS_IMAGES], width=280)

elif nav == "Company Services":
    st.header("Services for Import & Export")
    left, right = st.columns(2)
    with left:
        st.markdown("### Core Services")
        for service in services:
            st.write(f"- {service}")

    with right:
        st.markdown("### Company Details")
        for label, value in company_info.items():
            st.write(f"**{label}:** {value}")

    st.markdown("### Product Catalog")
    st.table(product_catalog)
    if BUSINESS_IMAGES:
        st.markdown("### Business Visuals")
        st.image(BUSINESS_IMAGES, caption=[Path(p).stem for p in BUSINESS_IMAGES], width=260)

elif nav == "Analytics Dashboard":
    st.header("Analytics Dashboard")
    st.write("Monitor shipments, revenue, and delivery performance for your import/export operations.")

    metric_col1, metric_col2, metric_col3 = st.columns(3)
    total_revenue = analytics_data["Revenue"].sum()
    total_shipments = analytics_data["Shipments"].sum()
    avg_on_time = analytics_data["On Time"].mean()

    metric_col1.metric("Total Revenue", f"USD {total_revenue:,.0f}")
    metric_col2.metric("Total Shipments", total_shipments)
    metric_col3.metric("Avg On-Time (%)", f"{avg_on_time:.0f}%")

    chart_col1, chart_col2 = st.columns(2)
    with chart_col1:
        st.subheader("Monthly Shipments")
        st.bar_chart(analytics_data.set_index("Month")["Shipments"])

    with chart_col2:
        st.subheader("Monthly Revenue")
        st.line_chart(analytics_data.set_index("Month")["Revenue"])

    st.subheader("Order Status Breakdown")
    st.table(status_data)
    st.bar_chart(status_data.set_index("Status"))

    st.subheader("Performance Trends")
    st.line_chart(analytics_data.set_index("Month")["On Time"])

elif nav == "Quotation Request":
    st.header("Request a Quote")
    with st.form("quote_form"):
        st.write("Please provide shipment details so we can calculate a tailored quote.")
        customer_name = st.text_input("Company / Customer Name")
        contact_email = st.text_input("Email")
        product = st.selectbox("Product", product_catalog["Product"].tolist())
        quantity = st.number_input("Quantity", min_value=1, value=100)
        origin = st.text_input("Origin City")
        destination = st.text_input("Destination City")
        incoterm = st.selectbox("Incoterm", ["FOB", "CIF", "EXW", "DDP"])
        shipment_type = st.selectbox("Shipment Type", ["Sea Freight", "Air Freight", "Land Freight"])
        shipping_date = st.date_input("Preferred Shipping Date", date.today())
        extra_notes = st.text_area("Additional Notes")
        submitted = st.form_submit_button("Submit Request")

    if submitted:
        st.success("Quote request submitted successfully.")
        st.markdown("**Summary**")
        st.write(
            {
                "Customer": customer_name,
                "Email": contact_email,
                "Product": product,
                "Quantity": quantity,
                "Origin": origin,
                "Destination": destination,
                "Incoterm": incoterm,
                "Shipment Type": shipment_type,
                "Shipping Date": shipping_date.strftime("%Y-%m-%d"),
                "Notes": extra_notes,
            }
        )
        estimated_cost = 500 + quantity * 1.8
        st.info(f"Estimated project cost: USD {estimated_cost:,.2f}")
        st.download_button(
            "Download Quote Request",
            data=(
                f"Customer: {customer_name}\n"
                f"Email: {contact_email}\n"
                f"Product: {product}\n"
                f"Quantity: {quantity}\n"
                f"Origin: {origin}\n"
                f"Destination: {destination}\n"
                f"Incoterm: {incoterm}\n"
                f"Shipment Type: {shipment_type}\n"
                f"Shipping Date: {shipping_date.strftime('%Y-%m-%d')}\n"
                f"Notes: {extra_notes}\n"
                f"Estimated Cost: USD {estimated_cost:,.2f}\n"
            ),
            file_name="gj_global_quote_request.txt",
            mime="text/plain",
        )

elif nav == "Order Tracking":
    st.header("Order Tracking")
    st.write("Track the status of your current shipments and review upcoming departures.")
    st.dataframe(sample_orders, use_container_width=True)
    st.markdown("### Upload Shipping Document")
    uploaded_file = st.file_uploader("Upload a shipment or customs document", type=["pdf", "xlsx", "csv", "docx"])
    if uploaded_file is not None:
        st.success(f"Uploaded: {uploaded_file.name}")
        st.write("File size:", f"{uploaded_file.size / 1024:.1f} KB")

elif nav == "Contact":
    st.header("Contact GJ Global Enterprises")
    st.write("Reach out to our export/import team for pricing, logistics support, and partnership enquiries.")
    st.write("**Company:** GJ Global Enterprises (Import & Export)")
    st.write("**Website:** www.gjglobalenterprises.com")
    st.write("**Email:** gjglobalenterprises26@gmail.com")
    st.write("**Phone:** 9600610294 / 8870185522")
    st.write("**Address:** Nethaji street 1st lane, Pichanoor, Gudiyattam, vellore-632602, TN, India")
    st.write("Follow us for global trade updates and customs advisory support.")

st.markdown("---")
st.caption("Built with Streamlit for GJ Global Enterprises (Import & Export)")
