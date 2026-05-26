import React from 'react';

export interface LanDollyFlatbedAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDollyFlatbedAlt: React.FC<LanDollyFlatbedAltProps>;
export default LanDollyFlatbedAlt;
