import React from 'react';

export interface LanCloudSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudSunSolid(props: LanCloudSunSolidProps): React.ReactElement;
export default LanCloudSunSolid;
