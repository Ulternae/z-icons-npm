import React from 'react';

export interface LanFontCaseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFontCaseRegular: React.FC<LanFontCaseRegularProps>;
export default LanFontCaseRegular;
