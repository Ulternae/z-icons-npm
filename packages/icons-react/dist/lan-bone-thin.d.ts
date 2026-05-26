import React from 'react';

export interface LanBoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoneThin: React.FC<LanBoneThinProps>;
export default LanBoneThin;
