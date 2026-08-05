import React from 'react';

export interface LanSunCloudSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunCloudSolid(props: LanSunCloudSolidProps): React.ReactElement;
export default LanSunCloudSolid;
