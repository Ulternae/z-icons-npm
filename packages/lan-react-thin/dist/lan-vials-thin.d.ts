import React from 'react';

export interface LanVialsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVialsThin(props: LanVialsThinProps): React.ReactElement;
export default LanVialsThin;
