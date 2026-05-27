import React from 'react';

export interface CoreAngleLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreAngleLeft: React.FC<CoreAngleLeftProps>;
export default CoreAngleLeft;
