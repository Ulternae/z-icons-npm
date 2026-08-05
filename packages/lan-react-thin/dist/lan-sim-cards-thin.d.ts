import React from 'react';

export interface LanSimCardsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSimCardsThin(props: LanSimCardsThinProps): React.ReactElement;
export default LanSimCardsThin;
