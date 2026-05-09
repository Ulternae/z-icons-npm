import React from 'react';

export interface MinaLightningOffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLightningOffSolid: React.FC<MinaLightningOffSolidProps>;
export default MinaLightningOffSolid;
