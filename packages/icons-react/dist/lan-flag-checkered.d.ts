import React from 'react';

export interface LanFlagCheckeredProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlagCheckered: React.FC<LanFlagCheckeredProps>;
export default LanFlagCheckered;
