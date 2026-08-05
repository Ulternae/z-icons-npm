import React from 'react';

export interface CoreCircleUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCircleUserSolid(props: CoreCircleUserSolidProps): React.ReactElement;
export default CoreCircleUserSolid;
