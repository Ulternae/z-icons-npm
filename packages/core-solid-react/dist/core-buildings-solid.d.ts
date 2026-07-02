import React from 'react';

export interface CoreBuildingsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBuildingsSolid(props: CoreBuildingsSolidProps): React.ReactElement;
export default CoreBuildingsSolid;
