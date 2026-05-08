import React from 'react';

export interface MinaInboxXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInboxXSolid: React.FC<MinaInboxXSolidProps>;
export default MinaInboxXSolid;
