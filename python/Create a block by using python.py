import hashlib

# Hash generator function
def hashGenerator(data):
    result = hashlib.sha256(data.encode()).hexdigest()
    return result

# Block class
class Block:
    def __init__(self, data, hash, prev_hash):
        self.data = data
        self.hash = hash
        self.prev_hash = prev_hash

# Blockchain class
class Blockchain:
    def __init__(self):
        hashlast = hashGenerator('gen_last')
        hashstart = hashGenerator('gen_hash')
        genesis = Block('gen data', hashstart, hashlast)
        self.chain = [genesis]

    def add_block(self, data):
        prev_hash = self.chain[-1].hash
        hash = hashGenerator(data + prev_hash)
        new_block = Block(data, hash, prev_hash)
        self.chain.append(new_block)

# Creating the blockchain
bc = Blockchain()
bc.add_block("1")
bc.add_block("2")
bc.add_block("3")

# Outputting the blockchain
for block in bc.chain:
    print(f"Data: {block.data}, Hash: {block.hash}, Previous Hash: {block.prev_hash}")
