import React from 'react';

export interface LanJeansProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJeans: React.FC<LanJeansProps>;
export default LanJeans;
