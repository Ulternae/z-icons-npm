import React from 'react';

export interface LanHouseTurretRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseTurretRegular(props: LanHouseTurretRegularProps): React.ReactElement;
export default LanHouseTurretRegular;
