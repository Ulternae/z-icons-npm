import React from 'react';

export interface LanHandSpockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandSpock(props: LanHandSpockProps): React.ReactElement;
export default LanHandSpock;
