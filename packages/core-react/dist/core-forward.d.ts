import React from 'react';

export interface CoreForwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreForward(props: CoreForwardProps): React.ReactElement;
export default CoreForward;
