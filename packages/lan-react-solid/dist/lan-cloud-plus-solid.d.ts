import React from 'react';

export interface LanCloudPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudPlusSolid(props: LanCloudPlusSolidProps): React.ReactElement;
export default LanCloudPlusSolid;
