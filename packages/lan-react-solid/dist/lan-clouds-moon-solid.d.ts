import React from 'react';

export interface LanCloudsMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudsMoonSolid(props: LanCloudsMoonSolidProps): React.ReactElement;
export default LanCloudsMoonSolid;
