import React from 'react';

export interface CoreLandmarkDomeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLandmarkDome: React.FC<CoreLandmarkDomeProps>;
export default CoreLandmarkDome;
