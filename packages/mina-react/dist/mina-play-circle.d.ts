import React from 'react';

export interface MinaPlayCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlayCircle(props: MinaPlayCircleProps): React.ReactElement;
export default MinaPlayCircle;
