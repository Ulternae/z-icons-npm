import React from 'react';

export interface LanWindsockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindsock(props: LanWindsockProps): React.ReactElement;
export default LanWindsock;
