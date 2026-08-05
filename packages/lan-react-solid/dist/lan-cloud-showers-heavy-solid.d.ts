import React from 'react';

export interface LanCloudShowersHeavySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudShowersHeavySolid(props: LanCloudShowersHeavySolidProps): React.ReactElement;
export default LanCloudShowersHeavySolid;
