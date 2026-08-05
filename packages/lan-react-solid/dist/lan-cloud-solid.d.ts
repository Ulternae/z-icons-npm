import React from 'react';

export interface LanCloudSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudSolid(props: LanCloudSolidProps): React.ReactElement;
export default LanCloudSolid;
