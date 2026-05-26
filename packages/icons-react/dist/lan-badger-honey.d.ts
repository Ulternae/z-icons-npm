import React from 'react';

export interface LanBadgerHoneyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadgerHoney: React.FC<LanBadgerHoneyProps>;
export default LanBadgerHoney;
