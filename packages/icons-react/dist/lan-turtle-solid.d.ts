import React from 'react';

export interface LanTurtleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTurtleSolid: React.FC<LanTurtleSolidProps>;
export default LanTurtleSolid;
