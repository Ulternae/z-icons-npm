import React from 'react';

export interface LanChurchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChurchSolid: React.FC<LanChurchSolidProps>;
export default LanChurchSolid;
