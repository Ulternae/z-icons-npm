import React from 'react';

export interface LanSmogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSmogSolid: React.FC<LanSmogSolidProps>;
export default LanSmogSolid;
