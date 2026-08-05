import React from 'react';

export interface LanMoonCloudSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoonCloudSolid(props: LanMoonCloudSolidProps): React.ReactElement;
export default LanMoonCloudSolid;
