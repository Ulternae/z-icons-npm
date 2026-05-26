import React from 'react';

export interface LanBadgeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadgeThin: React.FC<LanBadgeThinProps>;
export default LanBadgeThin;
