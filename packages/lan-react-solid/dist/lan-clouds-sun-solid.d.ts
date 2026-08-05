import React from 'react';

export interface LanCloudsSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudsSunSolid(props: LanCloudsSunSolidProps): React.ReactElement;
export default LanCloudsSunSolid;
