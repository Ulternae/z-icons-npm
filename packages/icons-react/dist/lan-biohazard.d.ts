import React from 'react';

export interface LanBiohazardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBiohazard: React.FC<LanBiohazardProps>;
export default LanBiohazard;
