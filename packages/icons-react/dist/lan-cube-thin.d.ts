import React from 'react';

export interface LanCubeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCubeThin: React.FC<LanCubeThinProps>;
export default LanCubeThin;
