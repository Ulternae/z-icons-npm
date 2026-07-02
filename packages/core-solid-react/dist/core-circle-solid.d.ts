import React from 'react';

export interface CoreCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCircleSolid(props: CoreCircleSolidProps): React.ReactElement;
export default CoreCircleSolid;
