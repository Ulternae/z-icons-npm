import React from 'react';

export interface LanCloudHailSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudHailSolid(props: LanCloudHailSolidProps): React.ReactElement;
export default LanCloudHailSolid;
