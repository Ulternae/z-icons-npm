import React from 'react';

export interface LanBlindsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlindsThin(props: LanBlindsThinProps): React.ReactElement;
export default LanBlindsThin;
