import React from 'react';

export interface LanBicepProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBicep: React.FC<LanBicepProps>;
export default LanBicep;
