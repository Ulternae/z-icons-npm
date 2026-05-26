import React from 'react';

export interface LanLineHeightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLineHeight: React.FC<LanLineHeightProps>;
export default LanLineHeight;
