import React from 'react';

export interface LanCastleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCastleThin: React.FC<LanCastleThinProps>;
export default LanCastleThin;
