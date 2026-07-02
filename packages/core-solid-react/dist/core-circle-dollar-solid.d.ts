import React from 'react';

export interface CoreCircleDollarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCircleDollarSolid(props: CoreCircleDollarSolidProps): React.ReactElement;
export default CoreCircleDollarSolid;
