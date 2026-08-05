import React from 'react';

export interface LanCloudCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudCheckSolid(props: LanCloudCheckSolidProps): React.ReactElement;
export default LanCloudCheckSolid;
