import React from 'react';

export interface LanFireplaceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireplaceSolid: React.FC<LanFireplaceSolidProps>;
export default LanFireplaceSolid;
