import React from 'react';

export interface CoreTextProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreText: React.FC<CoreTextProps>;
export default CoreText;
