import React from 'react';

export interface MinaImageCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaImageCircle(props: MinaImageCircleProps): React.ReactElement;
export default MinaImageCircle;
