import React from 'react';

export interface CoreAngleRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreAngleRight(props: CoreAngleRightProps): React.ReactElement;
export default CoreAngleRight;
