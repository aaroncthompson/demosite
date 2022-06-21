player = {'level':1,'name':'NONAME'}
player['gold'] = 0

# printstatus
print(f"You are {player['name']}, a level {player['level']} adventurer with {player['gold']} gold.")

# Begin
player['name'] = input("What is your name? ")
print(f"Welcome to Dravania, {player['name']}!")

# DEBUG
#print(f"DEBUG:")
#print(player)

player_keys = player.keys()
print(player_keys[0])
