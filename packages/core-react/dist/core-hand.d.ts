import React from 'react';

export interface CoreHandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreHand(props: CoreHandProps): React.ReactElement;
export default CoreHand;
