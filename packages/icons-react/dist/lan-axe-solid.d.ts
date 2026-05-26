import React from 'react';

export interface LanAxeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAxeSolid: React.FC<LanAxeSolidProps>;
export default LanAxeSolid;
