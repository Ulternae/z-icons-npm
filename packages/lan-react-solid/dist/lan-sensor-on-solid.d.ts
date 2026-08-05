import React from 'react';

export interface LanSensorOnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSensorOnSolid(props: LanSensorOnSolidProps): React.ReactElement;
export default LanSensorOnSolid;
