import React from 'react';

export interface MinaYenCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaYenCircle(props: MinaYenCircleProps): React.ReactElement;
export default MinaYenCircle;
