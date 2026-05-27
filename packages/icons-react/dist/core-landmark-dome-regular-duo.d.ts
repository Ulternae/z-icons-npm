import React from 'react';

export interface CoreLandmarkDomeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLandmarkDomeRegularDuo: React.FC<CoreLandmarkDomeRegularDuoProps>;
export default CoreLandmarkDomeRegularDuo;
