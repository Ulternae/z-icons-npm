import React from 'react';

export interface LanCompactDiscProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompactDisc: React.FC<LanCompactDiscProps>;
export default LanCompactDisc;
