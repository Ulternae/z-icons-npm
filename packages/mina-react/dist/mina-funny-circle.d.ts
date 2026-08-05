import React from 'react';

export interface MinaFunnyCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFunnyCircle(props: MinaFunnyCircleProps): React.ReactElement;
export default MinaFunnyCircle;
