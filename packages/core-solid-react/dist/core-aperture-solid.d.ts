import React from 'react';

export interface CoreApertureSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreApertureSolid(props: CoreApertureSolidProps): React.ReactElement;
export default CoreApertureSolid;
