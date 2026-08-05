import React from 'react';

export interface CoreBedEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBedEmptySolid(props: CoreBedEmptySolidProps): React.ReactElement;
export default CoreBedEmptySolid;
