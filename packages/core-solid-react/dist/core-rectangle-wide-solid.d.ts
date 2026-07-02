import React from 'react';

export interface CoreRectangleWideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreRectangleWideSolid(props: CoreRectangleWideSolidProps): React.ReactElement;
export default CoreRectangleWideSolid;
