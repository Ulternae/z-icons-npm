import React from 'react';

export interface LanFileAwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileAward: React.FC<LanFileAwardProps>;
export default LanFileAward;
