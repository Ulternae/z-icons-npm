import React from 'react';

export interface CoreRectangleVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreRectangleVerticalSolid(props: CoreRectangleVerticalSolidProps): React.ReactElement;
export default CoreRectangleVerticalSolid;
