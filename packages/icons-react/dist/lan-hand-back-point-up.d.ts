import React from 'react';

export interface LanHandBackPointUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandBackPointUp: React.FC<LanHandBackPointUpProps>;
export default LanHandBackPointUp;
