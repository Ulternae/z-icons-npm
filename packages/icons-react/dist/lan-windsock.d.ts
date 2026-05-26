import React from 'react';

export interface LanWindsockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindsock: React.FC<LanWindsockProps>;
export default LanWindsock;
