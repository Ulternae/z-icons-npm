import React from 'react';

export interface LanToiletsPortableRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletsPortableRegular: React.FC<LanToiletsPortableRegularProps>;
export default LanToiletsPortableRegular;
