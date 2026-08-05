import React from 'react';

export interface LanCloudShowersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudShowersSolid(props: LanCloudShowersSolidProps): React.ReactElement;
export default LanCloudShowersSolid;
