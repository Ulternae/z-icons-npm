import React from 'react';

export interface LanBookSpellsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookSpells(props: LanBookSpellsProps): React.ReactElement;
export default LanBookSpells;
