import React from 'react';

export interface CoreLocationArrowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLocationArrow(props: CoreLocationArrowProps): React.ReactElement;
export default CoreLocationArrow;
