import React from 'react';

export interface LanTabletsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTabletsThin: React.FC<LanTabletsThinProps>;
export default LanTabletsThin;
