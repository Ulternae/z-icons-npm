import React from 'react';

export interface LanDroneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDroneThin: React.FC<LanDroneThinProps>;
export default LanDroneThin;
