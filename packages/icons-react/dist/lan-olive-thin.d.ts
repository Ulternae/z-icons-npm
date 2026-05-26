import React from 'react';

export interface LanOliveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOliveThin: React.FC<LanOliveThinProps>;
export default LanOliveThin;
