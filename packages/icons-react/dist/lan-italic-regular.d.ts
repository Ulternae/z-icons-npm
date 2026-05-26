import React from 'react';

export interface LanItalicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanItalicRegular: React.FC<LanItalicRegularProps>;
export default LanItalicRegular;
