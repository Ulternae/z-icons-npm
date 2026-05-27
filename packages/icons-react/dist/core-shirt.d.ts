import React from 'react';

export interface CoreShirtProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShirt: React.FC<CoreShirtProps>;
export default CoreShirt;
