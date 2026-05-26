import React from 'react';

export interface LanHatSantaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatSantaRegular: React.FC<LanHatSantaRegularProps>;
export default LanHatSantaRegular;
