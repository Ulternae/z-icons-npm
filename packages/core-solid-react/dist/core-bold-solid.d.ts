import React from 'react';

export interface CoreBoldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBoldSolid(props: CoreBoldSolidProps): React.ReactElement;
export default CoreBoldSolid;
