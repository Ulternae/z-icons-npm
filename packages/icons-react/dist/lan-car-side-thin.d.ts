import React from 'react';

export interface LanCarSideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarSideThin: React.FC<LanCarSideThinProps>;
export default LanCarSideThin;
