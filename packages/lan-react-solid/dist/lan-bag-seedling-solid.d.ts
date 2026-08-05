import React from 'react';

export interface LanBagSeedlingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBagSeedlingSolid(props: LanBagSeedlingSolidProps): React.ReactElement;
export default LanBagSeedlingSolid;
