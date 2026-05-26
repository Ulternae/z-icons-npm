import React from 'react';

export interface LanBadgerHoneySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadgerHoneySolid: React.FC<LanBadgerHoneySolidProps>;
export default LanBadgerHoneySolid;
