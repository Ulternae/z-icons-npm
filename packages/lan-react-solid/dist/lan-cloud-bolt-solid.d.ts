import React from 'react';

export interface LanCloudBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudBoltSolid(props: LanCloudBoltSolidProps): React.ReactElement;
export default LanCloudBoltSolid;
