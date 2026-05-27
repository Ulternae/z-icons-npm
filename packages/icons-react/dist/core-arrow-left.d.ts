import React from 'react';

export interface CoreArrowLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreArrowLeft: React.FC<CoreArrowLeftProps>;
export default CoreArrowLeft;
