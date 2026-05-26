import React from 'react';

export interface LanViolinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanViolinSolid: React.FC<LanViolinSolidProps>;
export default LanViolinSolid;
