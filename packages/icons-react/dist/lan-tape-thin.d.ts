import React from 'react';

export interface LanTapeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTapeThin: React.FC<LanTapeThinProps>;
export default LanTapeThin;
