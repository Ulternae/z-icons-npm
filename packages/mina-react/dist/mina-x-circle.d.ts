import React from 'react';

export interface MinaXCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaXCircle(props: MinaXCircleProps): React.ReactElement;
export default MinaXCircle;
