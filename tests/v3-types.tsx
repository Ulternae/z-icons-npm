import * as React from 'react';
import { createZIcon } from '@zcorvus/icons-react';
import { MinaCheck, MinaCheckSolid } from '@zcorvus/icons-react/mina';
import DirectCheck from '@zcorvus/icons-react/mina/mina-check';
import bruIcons from '@zcorvus/icons-react/packs-data/bru';
import { renderSvg } from '@zcorvus/icons';
import check from '@zcorvus/icons/data/mina/mina-check';
import { minaIconNames } from '@zcorvus/icons/names/mina';

const Icon = createZIcon({ mina: { light: { check: MinaCheck }, solid: { check: MinaCheckSolid } } });
const valid = <Icon pack="mina" name="check" size={20} />;
const solid = <Icon pack="mina" variant="solid" name="check" />;
const SolidOnlyIcon = createZIcon({ mina: { solid: { check: MinaCheckSolid } } });
const explicitSolidOnly = <SolidOnlyIcon pack="mina" variant="solid" name="check" />;
const direct = <DirectCheck size={18} />;
const BruIcon = createZIcon({ bru: { solid: bruIcons } });
const wholePack = <BruIcon pack="bru" name="accessible-icon" />;
declare const bruName: keyof typeof bruIcons;
const dynamicBruName = <BruIcon pack="bru" name={bruName} />;
const html: string = renderSvg(check, { ariaLabel: 'Ready' });
const knownMinaName: (typeof minaIconNames)[number] = 'check';
void [valid, solid, explicitSolidOnly, direct, wholePack, dynamicBruName, html, knownMinaName];

// @ts-expect-error name is not in the selected subset
const wrongName = <Icon pack="mina" name="missing" />;
// @ts-expect-error a non-default variant must be explicit
const wrongVariant = <Icon pack="mina" variant="thin" name="check" />;
// @ts-expect-error a non-default variant must be explicit when it is the only registered variant
const missingSolidVariant = <SolidOnlyIcon pack="mina" name="check" />;
// @ts-expect-error pack was not registered
const wrongPack = <Icon pack="bru" name="check" />;
// @ts-expect-error name is not in the Bru registry
const wrongBruName = <BruIcon pack="bru" name="not-a-bru-icon" />;
// @ts-expect-error name is not in the generated Mina name list
const wrongGeneratedName: (typeof minaIconNames)[number] = 'not-a-mina-icon';
void [wrongName, wrongVariant, wrongPack, wrongBruName, missingSolidVariant, wrongGeneratedName];
