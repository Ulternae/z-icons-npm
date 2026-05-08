import React from 'react';

export interface MinaHomeXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHomeXSolid: React.FC<MinaHomeXSolidProps>;
export default MinaHomeXSolid;
