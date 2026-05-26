import React from 'react';

export interface LanHandPointUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointUp: React.FC<LanHandPointUpProps>;
export default LanHandPointUp;
