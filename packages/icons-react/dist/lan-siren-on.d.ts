import React from 'react';

export interface LanSirenOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSirenOn: React.FC<LanSirenOnProps>;
export default LanSirenOn;
