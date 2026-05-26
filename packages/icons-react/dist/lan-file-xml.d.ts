import React from 'react';

export interface LanFileXmlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileXml: React.FC<LanFileXmlProps>;
export default LanFileXml;
