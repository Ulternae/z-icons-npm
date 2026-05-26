import React from 'react';

export interface LanSausageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSausage: React.FC<LanSausageProps>;
export default LanSausage;
