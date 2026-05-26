import React from 'react';

export interface LanDropletPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDropletPlus: React.FC<LanDropletPlusProps>;
export default LanDropletPlus;
