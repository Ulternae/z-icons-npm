import React from 'react';

export interface NeoForwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoForward(props: NeoForwardProps): React.ReactElement;
export default NeoForward;
