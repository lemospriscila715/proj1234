
import random

def get_random_ts_code():
    """Generate a random TS code."""
    return f"{random.randint(100000, 999999)}{random.randint(100000, 999999)}"