import React from 'react';

export interface CoreUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreUserSolid(props: CoreUserSolidProps): React.ReactElement;
export default CoreUserSolid;
