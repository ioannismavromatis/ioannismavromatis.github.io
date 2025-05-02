all: build

# Local variable overrides and additional make targets, if available
-include Makefile.local

JEKYLL = bundle exec jekyll

CONFIG_YML ?= _config_ioannis.yml

# Common flags for all jekyll commends
JEKYLL_FLAGS += --config $(CONFIG_YML)

clean:
	$(JEKYLL) clean $(JEKYLL_FLAGS)

build:
	$(JEKYLL) build $(JEKYLL_FLAGS)

serve:
	$(JEKYLL) serve --watch $(JEKYLL_FLAGS)

debug:
	$(JEKYLL) serve --watch -t $(JEKYLL_FLAGS)

production:
	$(JEKYLL) build --destination $(HOME)/Documents/git/ioannismavromatis.github.io $(JEKYLL_FLAGS)