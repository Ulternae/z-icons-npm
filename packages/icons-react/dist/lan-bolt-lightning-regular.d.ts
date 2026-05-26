import React from 'react';

export interface LanBoltLightningRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoltLightningRegular: React.FC<LanBoltLightningRegularProps>;
export default LanBoltLightningRegular;
