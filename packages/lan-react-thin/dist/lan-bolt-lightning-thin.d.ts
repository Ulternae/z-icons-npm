import React from 'react';

export interface LanBoltLightningThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoltLightningThin(props: LanBoltLightningThinProps): React.ReactElement;
export default LanBoltLightningThin;
