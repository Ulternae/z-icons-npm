import React from 'react';

export interface CoreCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCodeSolid(props: CoreCodeSolidProps): React.ReactElement;
export default CoreCodeSolid;
