import React from 'react';

export interface LanPlateWheatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlateWheat: React.FC<LanPlateWheatProps>;
export default LanPlateWheat;
