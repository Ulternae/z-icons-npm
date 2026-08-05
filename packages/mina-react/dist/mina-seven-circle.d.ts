import React from 'react';

export interface MinaSevenCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSevenCircle(props: MinaSevenCircleProps): React.ReactElement;
export default MinaSevenCircle;
