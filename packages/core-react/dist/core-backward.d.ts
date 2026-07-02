import React from 'react';

export interface CoreBackwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBackward(props: CoreBackwardProps): React.ReactElement;
export default CoreBackward;
