import React from 'react';

export interface CoreTagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTag: React.FC<CoreTagProps>;
export default CoreTag;
