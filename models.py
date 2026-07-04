from database import get_connection

def get_products():

    conn = get_connection()

    products = conn.execute(
        "SELECT * FROM products"
    ).fetchall()

    conn.close()

    return products
