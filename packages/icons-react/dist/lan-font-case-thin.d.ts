import React from 'react';

export interface LanFontCaseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFontCaseThin: React.FC<LanFontCaseThinProps>;
export default LanFontCaseThin;
