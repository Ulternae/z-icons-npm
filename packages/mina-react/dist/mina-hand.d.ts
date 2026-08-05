import React from 'react';

export interface MinaHandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHand(props: MinaHandProps): React.ReactElement;
export default MinaHand;
