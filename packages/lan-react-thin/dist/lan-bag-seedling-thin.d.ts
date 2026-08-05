import React from 'react';

export interface LanBagSeedlingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBagSeedlingThin(props: LanBagSeedlingThinProps): React.ReactElement;
export default LanBagSeedlingThin;
