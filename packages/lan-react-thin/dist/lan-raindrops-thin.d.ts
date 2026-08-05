import React from 'react';

export interface LanRaindropsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRaindropsThin(props: LanRaindropsThinProps): React.ReactElement;
export default LanRaindropsThin;
