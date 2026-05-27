import React from 'react';

export interface CoreAngleUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreAngleUp: React.FC<CoreAngleUpProps>;
export default CoreAngleUp;
