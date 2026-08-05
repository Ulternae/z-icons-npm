import React from 'react';

export interface LanCloudsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudsSolid(props: LanCloudsSolidProps): React.ReactElement;
export default LanCloudsSolid;
