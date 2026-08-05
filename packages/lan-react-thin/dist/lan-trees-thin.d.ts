import React from 'react';

export interface LanTreesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreesThin(props: LanTreesThinProps): React.ReactElement;
export default LanTreesThin;
