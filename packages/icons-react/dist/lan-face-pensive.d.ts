import React from 'react';

export interface LanFacePensiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFacePensive: React.FC<LanFacePensiveProps>;
export default LanFacePensive;
