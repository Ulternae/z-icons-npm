import React from 'react';

export interface LanPersonCaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCane: React.FC<LanPersonCaneProps>;
export default LanPersonCane;
