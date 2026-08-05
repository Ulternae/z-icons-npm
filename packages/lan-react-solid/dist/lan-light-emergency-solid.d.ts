import React from 'react';

export interface LanLightEmergencySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightEmergencySolid(props: LanLightEmergencySolidProps): React.ReactElement;
export default LanLightEmergencySolid;
