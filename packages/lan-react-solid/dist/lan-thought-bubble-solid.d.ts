import React from 'react';

export interface LanThoughtBubbleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThoughtBubbleSolid(props: LanThoughtBubbleSolidProps): React.ReactElement;
export default LanThoughtBubbleSolid;
