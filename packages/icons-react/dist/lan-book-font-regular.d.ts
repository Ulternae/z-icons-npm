import React from 'react';

export interface LanBookFontRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookFontRegular: React.FC<LanBookFontRegularProps>;
export default LanBookFontRegular;
