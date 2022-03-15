resource "aws_ssm_parameter" "dummy" {
  name  = "/dev/dummy-param10"
  value = "dummy value stored in SSM 5"
  type  = "String"
}
