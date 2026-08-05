import React from 'react';

export interface CoreCircleInfoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCircleInfoSolid(props: CoreCircleInfoSolidProps): React.ReactElement;
export default CoreCircleInfoSolid;
