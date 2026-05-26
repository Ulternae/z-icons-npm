import React from 'react';

export interface LanToiletPortableRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletPortableRegular: React.FC<LanToiletPortableRegularProps>;
export default LanToiletPortableRegular;
