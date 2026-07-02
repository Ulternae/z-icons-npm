import React from 'react';

export interface CoreBedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBedSolid(props: CoreBedSolidProps): React.ReactElement;
export default CoreBedSolid;
