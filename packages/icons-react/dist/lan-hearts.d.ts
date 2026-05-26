import React from 'react';

export interface LanHeartsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHearts: React.FC<LanHeartsProps>;
export default LanHearts;
