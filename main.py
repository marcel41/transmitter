def on_bluetooth_connected():
    servos.P0.set_angle(90)
    basic.show_string("Y")
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    servos.P0.set_angle(0)
    basic.show_string("N")
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

basic.show_string("Hello")