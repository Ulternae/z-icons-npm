import React from 'react';

export interface LanFontCaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFontCase: React.FC<LanFontCaseProps>;
export default LanFontCase;
