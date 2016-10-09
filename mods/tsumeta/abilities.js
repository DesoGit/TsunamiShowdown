'use strict';

exports.BattleAbilities = {
    "defeatist": {
        inherit: true,
        onModifyAtk: function (atk, pokemon) {
            if (pokemon.hp <= pokemon.maxhp / 4) {
                return this.chainModify(0.5);
            }
        },
        onModifySpA: function (atk, pokemon) {
            if (pokemon.hp <= pokemon.maxhp / 4) {
                return this.chainModify(0.5);
            }
        }
    },
    "gluttony": {
        inherit: true,
        onEatItem: function (item, pokemon) {
            if (!pokemon.volatiles['gluttony']) pokemon.addVolatile('gluttony');
		//if item.isBerry = true onEat = onEat * 2; --Failed one-line rendition
		if (item.id === 'sitrusberry') {
			this.heal(pokemon.maxhp / 2);
		}
		if (item.id === 'oranberry') {
			this.heal(pokemon.maxhp + 20);
		}
		if (item.id === 'figyberry') {
			inherit: true,
			this.heal(pokemon.maxhp / 4);
		}
		if (item.id === 'wikiberry') {
			inherit: true,
			this.heal(pokemon.maxhp / 4);
		}
		if (item.id === 'magoberry') {
			inherit: true,
			this.heal(pokemon.maxhp / 4);
		}
		if (item.id === 'iapapaberry') {
			inherit: true,
			this.heal(pokemon.maxhp / 4);
		}
		if (item.id === 'aguavberry') {
			inherit: true,
			this.heal(pokemon.maxhp / 4);
		}
		if item.id === 'occaberry' {
			inherit: true,
			return this.chainModify(0.25);
		}
		if (item.id === 'passhoberry') {
			inherit: true,
			return this.chainModify(0.25);
		}
		if (item.id === 'wacanberry') {
			inherit: true,
			return this.chainModify(0.25);
		}
		if (item.id === 'rindoberry') {
			inherit: true,
			return this.chainModify(0.25);
		}
		if (item.id === 'yacheberry') {
			inherit: true,
			return this.chainModify(0.25);
		}
		if (item.id === 'chopleberry') {
			inherit: true,
			return this.chainModify(0.25);
		}
		if (item.id === 'kebiaberry') {
			inherit: true,
			return this.chainModify(0.25);
		}
		if (item.id === 'shucaberry') {
			inherit: true,
			return this.chainModify(0.25);
		}
		if (item.id === 'cobaberry') {
			inherit: true,
			return this.chainModify(0.25);
		}
		if (item.id === 'payapaberry') {
			inherit: true,
			return this.chainModify(0.25);
		}
		if (item.id === 'tangaberry') {
			inherit: true,
			return this.chainModify(0.25);
		}
		if (item.id === 'chartiberry') {
			inherit: true,
			return this.chainModify(0.25);
		}
		if (item.id === 'chilanberry') {
			inherit: true,
			return this.chainModify(0.25);
		}
		if (item.id === 'kasibberry') {
			inherit: true,
			return this.chainModify(0.25);
		}
		if (item.id === 'habanberry') {
			inherit: true,
			return this.chainModify(0.25);
		}
		if (item.id === 'colburberry') {
			inherit: true,
			return this.chainModify(0.25);
		}
		if (item.id === 'habiriberry') {
			inherit: true,
			return this.chainModify(0.25);
		}
		
        },
        effect: {
          duration: 2,
          onStart: function (target) {
            this.add('-start', target, 'ability: Gluttony');
          },
          onModifySpe: function (spe, pokemon) {
    				return this.chainModify(0.66);
    			},
		onModifyAtk: function (atk, pokemon) {
			return this.chainModify(0.66);
		},
          onModifyAtkPriority: 6,
    		  onSourceModifyAtk: function (atk, attacker, defender, move) {
    			  if (move.type === 'Ice' || move.type === 'Fire') {
    				  this.debug('Gluttony weaken');
    				  return this.chainModify(0.5);
    			  }
    		  },
    		  onModifySpAPriority: 5,
    		  onSourceModifySpA: function (atk, attacker, defender, move) {
    			  if (move.type === 'Ice' || move.type === 'Fire') {
    				  this.debug('Gluttony weaken');
    				  return this.chainModify(0.5);
    			  }
    		  }
        }
    },
    "immunity": {
      inherit: true,
      shortDesc: "This Pokemon cannot be poisoned, burned or paralyzed. Gaining this Ability while poisoned, burned or paralyzed cures it.",
		  onUpdate: function (pokemon) {
			  if (pokemon.status === 'psn' || pokemon.status === 'tox' || pokemon.status === 'par' || pokemon.status === 'brn') {
			    this.add('-activate', pokemon, 'ability: Immunity');
				  pokemon.cureStatus();
			  }
		  },
		  onSetStatus: function (status, target, source, effect) {
			  if (status.id !== 'psn' && status.id !== 'tox' || status.id !== 'brn' || status.id !== 'par') return;
			    if (!effect || !effect.status) return false;
			    this.add('-immune', target, '[msg]', '[from] ability: Immunity');
			    return false;
		    },
    },
    "turboblaze": {
      inherit: true,
      onModifyAtkPriority: 5,
		  onModifyAtk: function (atk, attacker, defender, move) {
			  if (move.type === 'Fire') {
				  this.debug('TurboBlaze boost');
				  return this.chainModify(1.5);
			  }
		  },
		  onModifySpAPriority: 5,
		  onModifySpA: function (atk, attacker, defender, move) {
			  if (move.type === 'Fire') {
				  this.debug('TurboBlaze boost');
				  return this.chainModify(1.5);
			  }
		  }
    },
    "teravolt": {
      inherit: true,
      onModifyAtkPriority: 5,
		  onModifyAtk: function (atk, attacker, defender, move) {
			  if (move.type === 'Electric') {
				  this.debug('Teravolt boost');
				  return this.chainModify(1.5);
			  }
		  },
		  onModifySpAPriority: 5,
		  onModifySpA: function (atk, attacker, defender, move) {
			  if (move.type === 'Electric') {
				  this.debug('Teravolt boost');
				  return this.chainModify(1.5);
			  }
		  }
    },
    "moldbreaker": {
      inherit: true,
      onHit: function (target, source, move) {
        if(move && move.effectType === 'Move') {
          this.chainModify(1.33);
        }
      },
      onModifyMove: function (move, pokemon) {
        if(move.basePower < 120 && pokemon.types.indexOf(move.type) > -1) this.chainModify(1.25);
      }
    },
    "unburden": {
      inherit: true,
      onAfterUseItem: function (item, pokemon) {
        if (pokemon !== this.effectData.target) return;
          pokemon.addVolatile('unburden');
        },
        onTakeItem: function (item, pokemon) {
          pokemon.addVolatile('unburden');
        },
        onEnd: function (pokemon) {
          pokemon.removeVolatile('unburden');
        },
        effect: {
          onModifySpe: function (spe, pokemon) {
            if (!pokemon.item) {
              return this.chainModify(1.5);
            }
          },
        },
    },
    "intimidate": {
      inherit: true,
      onStart: function (pokemon) {
        let foeactive = pokemon.side.foe.active;
        let activated = false;
        for (let i = 0; i < foeactive.length; i++) {
          if (!foeactive[i] || !this.isAdjacent(foeactive[i], pokemon)) continue;
          if (!activated) {
            this.add('-ability', pokemon, 'Intimidate', 'boost');
            activated = true;
          }
          if (foeactive[i].volatiles['substitute'] || foeactive[i].ability === 'intimidate') {
            this.add('-immune', foeactive[i], '[msg]');
          } else {
            this.boost({atk: -1}, foeactive[i], pokemon);
            if(Math.floor(Math.random() * 99) < 20) this.boost({spe: -1}, foeactive[i], pokemon);
          }
        }
      },
    }

}
