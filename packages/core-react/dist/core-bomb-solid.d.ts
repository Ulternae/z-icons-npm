import React from 'react';

export interface CoreBombSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBombSolid(props: CoreBombSolidProps): React.ReactElement;
export default CoreBombSolid;
