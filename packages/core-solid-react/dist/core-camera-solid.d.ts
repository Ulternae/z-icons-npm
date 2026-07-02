import React from 'react';

export interface CoreCameraSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCameraSolid(props: CoreCameraSolidProps): React.ReactElement;
export default CoreCameraSolid;
