import React from 'react';

export interface LanDittoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDitto: React.FC<LanDittoProps>;
export default LanDitto;
