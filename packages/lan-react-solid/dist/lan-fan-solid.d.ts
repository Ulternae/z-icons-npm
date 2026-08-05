import React from 'react';

export interface LanFanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFanSolid(props: LanFanSolidProps): React.ReactElement;
export default LanFanSolid;
