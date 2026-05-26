import React from 'react';

export interface LanFileXmlSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileXmlSolid: React.FC<LanFileXmlSolidProps>;
export default LanFileXmlSolid;
