import React from 'react';

export interface LanDeleteLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDeleteLeft: React.FC<LanDeleteLeftProps>;
export default LanDeleteLeft;
