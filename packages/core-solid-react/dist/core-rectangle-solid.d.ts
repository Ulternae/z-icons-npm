import React from 'react';

export interface CoreRectangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreRectangleSolid(props: CoreRectangleSolidProps): React.ReactElement;
export default CoreRectangleSolid;
