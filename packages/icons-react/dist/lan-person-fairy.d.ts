import React from 'react';

export interface LanPersonFairyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonFairy: React.FC<LanPersonFairyProps>;
export default LanPersonFairy;
