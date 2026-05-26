import React from 'react';

export interface LanFileXmlRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileXmlRegular: React.FC<LanFileXmlRegularProps>;
export default LanFileXmlRegular;
