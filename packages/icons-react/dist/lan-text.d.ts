import React from 'react';

export interface LanTextProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanText: React.FC<LanTextProps>;
export default LanText;
