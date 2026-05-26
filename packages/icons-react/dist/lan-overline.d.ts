import React from 'react';

export interface LanOverlineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOverline: React.FC<LanOverlineProps>;
export default LanOverline;
