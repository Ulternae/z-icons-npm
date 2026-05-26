import React from 'react';

export interface LanLabelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLabel: React.FC<LanLabelProps>;
export default LanLabel;
