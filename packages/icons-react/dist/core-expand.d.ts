import React from 'react';

export interface CoreExpandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreExpand: React.FC<CoreExpandProps>;
export default CoreExpand;
