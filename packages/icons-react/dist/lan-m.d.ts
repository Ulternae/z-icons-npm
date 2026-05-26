import React from 'react';

export interface LanMProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanM: React.FC<LanMProps>;
export default LanM;
