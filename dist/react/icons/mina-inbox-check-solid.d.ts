import React from 'react';

export interface MinaInboxCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInboxCheckSolid: React.FC<MinaInboxCheckSolidProps>;
export default MinaInboxCheckSolid;
