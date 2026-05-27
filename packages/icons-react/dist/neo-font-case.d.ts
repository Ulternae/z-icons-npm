import React from 'react';

export interface NeoFontCaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFontCase: React.FC<NeoFontCaseProps>;
export default NeoFontCase;
