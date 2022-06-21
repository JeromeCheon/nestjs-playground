export class GetUserRequest {
  constructor(public readonly userId: string) {}
  // Kafka를 사용하기 때문에 이걸 통해 serialize 해야 함
  toString() {
    return JSON.stringify({
      userId: this.userId,
    });
  }
}
