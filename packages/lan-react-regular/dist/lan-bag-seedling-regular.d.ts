import React from 'react';

export interface LanBagSeedlingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBagSeedlingRegular(props: LanBagSeedlingRegularProps): React.ReactElement;
export default LanBagSeedlingRegular;
