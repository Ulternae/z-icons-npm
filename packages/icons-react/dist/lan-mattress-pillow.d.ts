import React from 'react';

export interface LanMattressPillowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMattressPillow: React.FC<LanMattressPillowProps>;
export default LanMattressPillow;
