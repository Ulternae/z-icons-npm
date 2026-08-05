import React from 'react';

export interface LanCloudMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudMinusSolid(props: LanCloudMinusSolidProps): React.ReactElement;
export default LanCloudMinusSolid;
