import React from 'react';

export interface CoreDollarSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreDollarSign(props: CoreDollarSignProps): React.ReactElement;
export default CoreDollarSign;
