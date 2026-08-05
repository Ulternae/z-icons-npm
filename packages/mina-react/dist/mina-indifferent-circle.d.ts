import React from 'react';

export interface MinaIndifferentCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaIndifferentCircle(props: MinaIndifferentCircleProps): React.ReactElement;
export default MinaIndifferentCircle;
