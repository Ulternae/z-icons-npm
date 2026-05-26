import React from 'react';

export interface LanSausageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSausageRegular: React.FC<LanSausageRegularProps>;
export default LanSausageRegular;
