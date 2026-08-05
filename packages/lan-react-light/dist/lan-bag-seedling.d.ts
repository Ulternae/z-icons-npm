import React from 'react';

export interface LanBagSeedlingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBagSeedling(props: LanBagSeedlingProps): React.ReactElement;
export default LanBagSeedling;
