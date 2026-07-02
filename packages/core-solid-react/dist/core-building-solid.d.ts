import React from 'react';

export interface CoreBuildingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBuildingSolid(props: CoreBuildingSolidProps): React.ReactElement;
export default CoreBuildingSolid;
