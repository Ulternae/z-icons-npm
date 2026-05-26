import React from 'react';

export interface LanFalafelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFalafelThin: React.FC<LanFalafelThinProps>;
export default LanFalafelThin;
