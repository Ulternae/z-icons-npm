import React from 'react';

export interface CoreCircleDollarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCircleDollar(props: CoreCircleDollarProps): React.ReactElement;
export default CoreCircleDollar;
