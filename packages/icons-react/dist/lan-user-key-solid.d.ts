import React from 'react';

export interface LanUserKeySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserKeySolid: React.FC<LanUserKeySolidProps>;
export default LanUserKeySolid;
