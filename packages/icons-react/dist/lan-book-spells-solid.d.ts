import React from 'react';

export interface LanBookSpellsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookSpellsSolid: React.FC<LanBookSpellsSolidProps>;
export default LanBookSpellsSolid;
