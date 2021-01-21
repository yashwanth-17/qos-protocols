export default function token(output_flow, bucket_size, data) {
  let received_packets = 0; //packets received by receiver stored in this variable
  let packets_lost = 0; //packets lost stored in this variable
  let storage = 0;
  let current_pkt_size = 0;
  let output_pkt_size;
  let input_pkt_size;
  let size_left;
  let o_data = data;

  input_pkt_size = Math.ceil(data / 4);
  output_pkt_size = output_flow;

  while (data > 0) {
    if (data < input_pkt_size) {
      current_pkt_size = data;
    } else {
      current_pkt_size = input_pkt_size;
    }

    size_left = bucket_size - storage;

    if (current_pkt_size <= size_left) {
      storage += current_pkt_size;
    } else {
      while (current_pkt_size > size_left) {
        storage -= output_pkt_size;
        received_packets += output_pkt_size;
        size_left = bucket_size - storage;
      }
      continue;
    }

    storage -= output_pkt_size;
    received_packets += output_pkt_size;
    data -= current_pkt_size;
  }

  received_packets += storage;
  packets_lost = o_data - received_packets;

  return { received_packets, packets_lost };
}
