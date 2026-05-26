import React from 'react';

export interface LanManholeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanManholeSolid: React.FC<LanManholeSolidProps>;
export default LanManholeSolid;
