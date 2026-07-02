import React from 'react';

export interface CoreGearSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGearSolid(props: CoreGearSolidProps): React.ReactElement;
export default CoreGearSolid;
