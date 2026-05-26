import React from 'react';

export interface LanIdBadgeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIdBadgeThin: React.FC<LanIdBadgeThinProps>;
export default LanIdBadgeThin;
