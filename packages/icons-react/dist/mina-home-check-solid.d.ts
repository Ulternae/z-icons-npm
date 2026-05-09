import React from 'react';

export interface MinaHomeCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHomeCheckSolid: React.FC<MinaHomeCheckSolidProps>;
export default MinaHomeCheckSolid;
