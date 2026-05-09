import React from 'react';

export interface MinaPlayCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlayCircle: React.FC<MinaPlayCircleProps>;
export default MinaPlayCircle;
