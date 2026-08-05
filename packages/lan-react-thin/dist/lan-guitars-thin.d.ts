import React from 'react';

export interface LanGuitarsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGuitarsThin(props: LanGuitarsThinProps): React.ReactElement;
export default LanGuitarsThin;
