import React from 'react';

export interface CoreXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreXmark: React.FC<CoreXmarkProps>;
export default CoreXmark;
