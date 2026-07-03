package main

import (
	networkstructs "_website/NetworkStructs"

	"github.com/gin-gonic/gin"
)

func getsrc() string {

	return "/About"
}

func main() {

	f := networkstructs.MediaMessage{}
	client := gin.Default()

	client.LoadHTMLGlob("templates/*")

	f.Function = func() string {
		return "Hello World"
	}

	port := networkstructs.PortsMover{}

	client.GET("/", func(c *gin.Context) {
		f.Function = func() string {
			return "index.html"
		}

		c.HTML(200, f.Function(), gin.H{
			"message": f.Function(),
		})
	})

	port.BackPort = func() string {
		return ":3000"
	}

	client.GET(getsrc(), func(c *gin.Context) {

		f.Function = func() string {
			return getsrc()
		}

		c.HTML(200, "About.html", gin.H{
			"message": f.Function(),
		})
	})

	client.Run(port.BackPort())
}
