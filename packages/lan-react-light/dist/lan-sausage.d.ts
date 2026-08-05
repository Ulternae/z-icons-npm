import React from 'react';

export interface LanSausageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSausage(props: LanSausageProps): React.ReactElement;
export default LanSausage;
