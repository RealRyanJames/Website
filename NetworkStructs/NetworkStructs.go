package networkstructs

type MediaMessage struct {
	Name     string
	Function func() string
}

type PortsMover struct {
	Port     int
	BackPort func() string
}

type SRCFolder struct {
	Name    string
	Folder  func() string
	isOwned bool
}
