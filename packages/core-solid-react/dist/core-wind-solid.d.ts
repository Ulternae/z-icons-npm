import React from 'react';

export interface CoreWindSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreWindSolid(props: CoreWindSolidProps): React.ReactElement;
export default CoreWindSolid;
