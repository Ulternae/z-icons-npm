import React from 'react';

export interface LanHatBeachProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatBeach: React.FC<LanHatBeachProps>;
export default LanHatBeach;
