import React from 'react';

export interface CoreCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCircleCheckSolid(props: CoreCircleCheckSolidProps): React.ReactElement;
export default CoreCircleCheckSolid;
