import React from 'react';

export interface CoreArrowRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreArrowRight(props: CoreArrowRightProps): React.ReactElement;
export default CoreArrowRight;
