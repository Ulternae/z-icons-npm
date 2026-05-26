import React from 'react';

export interface LanCitrusSliceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCitrusSliceSolid: React.FC<LanCitrusSliceSolidProps>;
export default LanCitrusSliceSolid;
