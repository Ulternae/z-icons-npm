import React from 'react';

export interface LanToiletsPortableProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletsPortable: React.FC<LanToiletsPortableProps>;
export default LanToiletsPortable;
