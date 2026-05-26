import React from 'react';

export interface LanTextHeightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTextHeight: React.FC<LanTextHeightProps>;
export default LanTextHeight;
