import React from 'react';

export interface CoreRectangleCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreRectangleCodeSolid(props: CoreRectangleCodeSolidProps): React.ReactElement;
export default CoreRectangleCodeSolid;
