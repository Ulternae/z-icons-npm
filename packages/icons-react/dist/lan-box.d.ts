import React from 'react';

export interface LanBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBox: React.FC<LanBoxProps>;
export default LanBox;
