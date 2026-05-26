import React from 'react';

export interface LanBoltLightningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoltLightning: React.FC<LanBoltLightningProps>;
export default LanBoltLightning;
