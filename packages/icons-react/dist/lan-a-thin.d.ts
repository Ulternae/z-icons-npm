import React from 'react';

export interface LanAThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAThin: React.FC<LanAThinProps>;
export default LanAThin;
