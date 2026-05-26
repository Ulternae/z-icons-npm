import React from 'react';

export interface LanBadgeSheriffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadgeSheriff: React.FC<LanBadgeSheriffProps>;
export default LanBadgeSheriff;
