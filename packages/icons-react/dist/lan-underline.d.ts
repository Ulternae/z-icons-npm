import React from 'react';

export interface LanUnderlineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUnderline: React.FC<LanUnderlineProps>;
export default LanUnderline;
