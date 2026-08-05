import React from 'react';

export interface LanGiftsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGiftsThin(props: LanGiftsThinProps): React.ReactElement;
export default LanGiftsThin;
