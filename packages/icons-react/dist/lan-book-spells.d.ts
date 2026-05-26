import React from 'react';

export interface LanBookSpellsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookSpells: React.FC<LanBookSpellsProps>;
export default LanBookSpells;
