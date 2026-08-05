import React from 'react';

export interface LanSensorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSensorSolid(props: LanSensorSolidProps): React.ReactElement;
export default LanSensorSolid;
