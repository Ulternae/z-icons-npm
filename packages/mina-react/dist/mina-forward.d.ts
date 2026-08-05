import React from 'react';

export interface MinaForwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaForward(props: MinaForwardProps): React.ReactElement;
export default MinaForward;
