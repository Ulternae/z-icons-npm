import React from 'react';

export interface LanSausageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSausageRegular(props: LanSausageRegularProps): React.ReactElement;
export default LanSausageRegular;
