import React from 'react';

export interface LanPlateWheatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlateWheatRegular: React.FC<LanPlateWheatRegularProps>;
export default LanPlateWheatRegular;
