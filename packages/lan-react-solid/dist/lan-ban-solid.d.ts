import React from 'react';

export interface LanBanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBanSolid(props: LanBanSolidProps): React.ReactElement;
export default LanBanSolid;
