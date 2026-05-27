import React from 'react';

export interface CoreBuildingsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBuildingsSolid: React.FC<CoreBuildingsSolidProps>;
export default CoreBuildingsSolid;
