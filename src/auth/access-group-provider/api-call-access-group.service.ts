import { AccessGroupService as AccessGroupService } from "./access-group.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiCallAccessGroupService extends AccessGroupService {
  async getAccessGroups(
    idpPayload: Record<string, unknown>,
  ): Promise<string[]> {
    return ["ess", "loki", "odin"];
  }
}
