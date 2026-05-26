import React from 'react';

export interface LanGrid5RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid5Regular: React.FC<LanGrid5RegularProps>;
export default LanGrid5Regular;
