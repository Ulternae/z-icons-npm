import React from 'react';

export interface MinaInfoCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInfoCircle(props: MinaInfoCircleProps): React.ReactElement;
export default MinaInfoCircle;
