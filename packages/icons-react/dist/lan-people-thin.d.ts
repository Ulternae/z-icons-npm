import React from 'react';

export interface LanPeopleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleThin: React.FC<LanPeopleThinProps>;
export default LanPeopleThin;
