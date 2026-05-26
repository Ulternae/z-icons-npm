import React from 'react';

export interface LanFileXmlThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileXmlThin: React.FC<LanFileXmlThinProps>;
export default LanFileXmlThin;
