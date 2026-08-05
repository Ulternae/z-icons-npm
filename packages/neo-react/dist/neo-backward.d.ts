import React from 'react';

export interface NeoBackwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBackward(props: NeoBackwardProps): React.ReactElement;
export default NeoBackward;
