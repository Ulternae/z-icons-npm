import React from 'react';

export interface LanSocksThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSocksThin: React.FC<LanSocksThinProps>;
export default LanSocksThin;
