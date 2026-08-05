import React from 'react';

export interface MinaSkipForwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSkipForward(props: MinaSkipForwardProps): React.ReactElement;
export default MinaSkipForward;
