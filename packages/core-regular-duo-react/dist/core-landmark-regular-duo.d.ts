import React from 'react';

export interface CoreLandmarkRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLandmarkRegularDuo(props: CoreLandmarkRegularDuoProps): React.ReactElement;
export default CoreLandmarkRegularDuo;
