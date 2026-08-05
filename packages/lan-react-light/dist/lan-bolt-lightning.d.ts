import React from 'react';

export interface LanBoltLightningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoltLightning(props: LanBoltLightningProps): React.ReactElement;
export default LanBoltLightning;
