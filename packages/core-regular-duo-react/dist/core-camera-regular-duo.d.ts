import React from 'react';

export interface CoreCameraRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCameraRegularDuo(props: CoreCameraRegularDuoProps): React.ReactElement;
export default CoreCameraRegularDuo;
