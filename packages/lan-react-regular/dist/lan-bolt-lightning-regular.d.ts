import React from 'react';

export interface LanBoltLightningRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoltLightningRegular(props: LanBoltLightningRegularProps): React.ReactElement;
export default LanBoltLightningRegular;
