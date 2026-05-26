import React from 'react';

export interface LanFillProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFill: React.FC<LanFillProps>;
export default LanFill;
