import React from 'react';

export interface CorePlayPauseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePlayPauseSolid(props: CorePlayPauseSolidProps): React.ReactElement;
export default CorePlayPauseSolid;
