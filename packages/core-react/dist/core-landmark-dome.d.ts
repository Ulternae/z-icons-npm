import React from 'react';

export interface CoreLandmarkDomeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLandmarkDome(props: CoreLandmarkDomeProps): React.ReactElement;
export default CoreLandmarkDome;
