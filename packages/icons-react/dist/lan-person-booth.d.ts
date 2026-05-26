import React from 'react';

export interface LanPersonBoothProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonBooth: React.FC<LanPersonBoothProps>;
export default LanPersonBooth;
