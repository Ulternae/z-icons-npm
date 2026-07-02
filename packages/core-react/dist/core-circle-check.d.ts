import React from 'react';

export interface CoreCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCircleCheck(props: CoreCircleCheckProps): React.ReactElement;
export default CoreCircleCheck;
