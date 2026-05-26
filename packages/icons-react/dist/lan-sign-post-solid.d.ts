import React from 'react';

export interface LanSignPostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignPostSolid: React.FC<LanSignPostSolidProps>;
export default LanSignPostSolid;
