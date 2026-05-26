import React from 'react';

export interface LanCarSirenOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarSirenOn: React.FC<LanCarSirenOnProps>;
export default LanCarSirenOn;
