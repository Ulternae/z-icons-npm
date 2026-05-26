import React from 'react';

export interface LanRecycleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRecycleThin: React.FC<LanRecycleThinProps>;
export default LanRecycleThin;
