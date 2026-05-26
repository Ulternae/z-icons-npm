import React from 'react';

export interface LanLibraSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLibraSolid: React.FC<LanLibraSolidProps>;
export default LanLibraSolid;
