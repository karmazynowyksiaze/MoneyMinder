variable "vm_map" {
  type = map(object({
    name = string
    size = string
  }))
  default = {
    "vm1" = {
      name = "srv-backend"
      size = "Standard_DS1_v2"
    }
    "vm2" = {
      name = "srv-db"
      size = "Standard_DS1_v2"
    }
    "vm3" = {
      name = "srv-frontend"
      size = "Standard_DS1_v2"
    }
  }
}