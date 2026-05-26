import React from 'react';

export interface LanLightCeilingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightCeilingSolid: React.FC<LanLightCeilingSolidProps>;
export default LanLightCeilingSolid;
