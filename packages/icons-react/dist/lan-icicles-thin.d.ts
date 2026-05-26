import React from 'react';

export interface LanIciclesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIciclesThin: React.FC<LanIciclesThinProps>;
export default LanIciclesThin;
