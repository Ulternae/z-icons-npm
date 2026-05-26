import React from 'react';

export interface LanDolphinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDolphin: React.FC<LanDolphinProps>;
export default LanDolphin;
