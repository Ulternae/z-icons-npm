import React from 'react';

export interface LanSocksThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSocksThin(props: LanSocksThinProps): React.ReactElement;
export default LanSocksThin;
