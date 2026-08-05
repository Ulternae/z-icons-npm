import React from 'react';

export interface MinaForwardCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaForwardCircle(props: MinaForwardCircleProps): React.ReactElement;
export default MinaForwardCircle;
