import React from 'react';

export interface LanBanjoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBanjoSolid(props: LanBanjoSolidProps): React.ReactElement;
export default LanBanjoSolid;
