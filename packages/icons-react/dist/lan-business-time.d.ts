import React from 'react';

export interface LanBusinessTimeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusinessTime: React.FC<LanBusinessTimeProps>;
export default LanBusinessTime;
