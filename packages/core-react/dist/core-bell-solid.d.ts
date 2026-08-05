import React from 'react';

export interface CoreBellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBellSolid(props: CoreBellSolidProps): React.ReactElement;
export default CoreBellSolid;
