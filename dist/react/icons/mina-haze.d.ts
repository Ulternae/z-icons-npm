import React from 'react';

export interface MinaHazeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHaze: React.FC<MinaHazeProps>;
export default MinaHaze;
