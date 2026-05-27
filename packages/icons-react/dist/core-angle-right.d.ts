import React from 'react';

export interface CoreAngleRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreAngleRight: React.FC<CoreAngleRightProps>;
export default CoreAngleRight;
