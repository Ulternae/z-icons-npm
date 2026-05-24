import React from 'react';

export interface BruWazeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruWaze: React.FC<BruWazeProps>;
export default BruWaze;
