import React from 'react';

export interface CoreEqualsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreEquals: React.FC<CoreEqualsProps>;
export default CoreEquals;
