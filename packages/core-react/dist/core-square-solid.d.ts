import React from 'react';

export interface CoreSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSquareSolid(props: CoreSquareSolidProps): React.ReactElement;
export default CoreSquareSolid;
