import React from 'react';

export interface LanFontRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFontRegular: React.FC<LanFontRegularProps>;
export default LanFontRegular;
