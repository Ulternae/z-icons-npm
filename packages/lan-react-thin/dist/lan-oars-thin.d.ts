import React from 'react';

export interface LanOarsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOarsThin(props: LanOarsThinProps): React.ReactElement;
export default LanOarsThin;
