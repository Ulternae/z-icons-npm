import React from 'react';

export interface CoreCameraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCamera(props: CoreCameraProps): React.ReactElement;
export default CoreCamera;
