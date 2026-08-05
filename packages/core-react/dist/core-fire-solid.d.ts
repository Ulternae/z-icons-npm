import React from 'react';

export interface CoreFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFireSolid(props: CoreFireSolidProps): React.ReactElement;
export default CoreFireSolid;
