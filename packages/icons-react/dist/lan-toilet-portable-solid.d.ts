import React from 'react';

export interface LanToiletPortableSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletPortableSolid: React.FC<LanToiletPortableSolidProps>;
export default LanToiletPortableSolid;
