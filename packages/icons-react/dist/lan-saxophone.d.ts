import React from 'react';

export interface LanSaxophoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSaxophone: React.FC<LanSaxophoneProps>;
export default LanSaxophone;
