import React from 'react';

export interface LanCloudSnowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudSnowSolid(props: LanCloudSnowSolidProps): React.ReactElement;
export default LanCloudSnowSolid;
