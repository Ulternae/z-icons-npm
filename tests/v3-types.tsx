import * as React from 'react';
import { createZIcon } from '@zcorvus/icons-react';
import { MinaCheck, MinaCheckSolid } from '@zcorvus/icons-react/mina';
import DirectCheck from '@zcorvus/icons-react/mina/mina-check';
import bruIcons from '@zcorvus/icons-react/packs-data/bru';
import { renderSvg } from '@zcorvus/icons';
import check from '@zcorvus/icons/data/mina/mina-check';

const Icon = createZIcon({ mina: { light: { check: MinaCheck }, solid: { check: MinaCheckSolid } } });
const valid = <Icon pack="mina" name="check" size={20} />;
const solid = <Icon pack="mina" variant="solid" name="check" />;
const direct = <DirectCheck size={18} />;
const BruIcon = createZIcon({ bru: { solid: bruIcons } });
const wholePack = <BruIcon pack="bru" name="accessible-icon" />;
const html: string = renderSvg(check, { ariaLabel: 'Ready' });
void [valid, solid, direct, wholePack, html];

// @ts-expect-error name is not in the selected subset
const wrongName = <Icon pack="mina" name="missing" />;
// @ts-expect-error a non-default variant must be explicit
const wrongVariant = <Icon pack="mina" variant="thin" name="check" />;
// @ts-expect-error pack was not registered
const wrongPack = <Icon pack="bru" name="check" />;
void [wrongName, wrongVariant, wrongPack];
