import React from 'react';

export interface LanPersonDressFairyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDressFairy: React.FC<LanPersonDressFairyProps>;
export default LanPersonDressFairy;
