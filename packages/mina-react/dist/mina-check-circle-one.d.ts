import React from 'react';

export interface MinaCheckCircleOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCheckCircleOne(props: MinaCheckCircleOneProps): React.ReactElement;
export default MinaCheckCircleOne;
