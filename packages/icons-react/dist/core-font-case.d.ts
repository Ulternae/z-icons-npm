import React from 'react';

export interface CoreFontCaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFontCase: React.FC<CoreFontCaseProps>;
export default CoreFontCase;
