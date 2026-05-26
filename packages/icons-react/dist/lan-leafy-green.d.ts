import React from 'react';

export interface LanLeafyGreenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeafyGreen: React.FC<LanLeafyGreenProps>;
export default LanLeafyGreen;
