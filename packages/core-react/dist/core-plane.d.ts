import React from 'react';

export interface CorePlaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePlane(props: CorePlaneProps): React.ReactElement;
export default CorePlane;
