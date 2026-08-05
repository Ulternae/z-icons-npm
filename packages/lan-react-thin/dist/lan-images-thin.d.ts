import React from 'react';

export interface LanImagesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImagesThin(props: LanImagesThinProps): React.ReactElement;
export default LanImagesThin;
