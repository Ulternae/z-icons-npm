import React from 'react';

export interface LanMotorcycleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMotorcycleSolid: React.FC<LanMotorcycleSolidProps>;
export default LanMotorcycleSolid;
