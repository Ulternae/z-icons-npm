import React from 'react';

export interface CoreTagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTagSolid(props: CoreTagSolidProps): React.ReactElement;
export default CoreTagSolid;
