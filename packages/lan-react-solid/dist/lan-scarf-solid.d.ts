import React from 'react';

export interface LanScarfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScarfSolid(props: LanScarfSolidProps): React.ReactElement;
export default LanScarfSolid;
