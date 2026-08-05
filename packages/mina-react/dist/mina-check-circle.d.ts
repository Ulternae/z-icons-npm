import React from 'react';

export interface MinaCheckCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCheckCircle(props: MinaCheckCircleProps): React.ReactElement;
export default MinaCheckCircle;
