import React from 'react';

export interface CoreCircleArrowLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCircleArrowLeft: React.FC<CoreCircleArrowLeftProps>;
export default CoreCircleArrowLeft;
