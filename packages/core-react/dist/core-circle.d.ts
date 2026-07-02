import React from 'react';

export interface CoreCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCircle(props: CoreCircleProps): React.ReactElement;
export default CoreCircle;
