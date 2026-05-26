import React from 'react';

export interface LanToiletPortableProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletPortable: React.FC<LanToiletPortableProps>;
export default LanToiletPortable;
