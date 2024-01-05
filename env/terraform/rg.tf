resource "azurerm_resource_group" "rg" {
  name     = "MoneyMinder"
  location = "West Europe"

  tags = {
    owner      = "Pawlowski"
    enviorment = "MoneyFinderEnv"
  }
}





