import React from 'react';

export interface LanDrawCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrawCircleSolid: React.FC<LanDrawCircleSolidProps>;
export default LanDrawCircleSolid;
