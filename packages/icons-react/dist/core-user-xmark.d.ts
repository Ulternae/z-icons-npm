import React from 'react';

export interface CoreUserXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUserXmark: React.FC<CoreUserXmarkProps>;
export default CoreUserXmark;
