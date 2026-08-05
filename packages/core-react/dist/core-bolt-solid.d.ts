import React from 'react';

export interface CoreBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBoltSolid(props: CoreBoltSolidProps): React.ReactElement;
export default CoreBoltSolid;
