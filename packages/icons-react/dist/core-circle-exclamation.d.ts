import React from 'react';

export interface CoreCircleExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCircleExclamation: React.FC<CoreCircleExclamationProps>;
export default CoreCircleExclamation;
