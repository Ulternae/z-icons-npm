import React from 'react';

export interface MinaMusicCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMusicCircle: React.FC<MinaMusicCircleProps>;
export default MinaMusicCircle;
