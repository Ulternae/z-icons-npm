import React from 'react';

export interface LanCloudShowersWaterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudShowersWaterSolid(props: LanCloudShowersWaterSolidProps): React.ReactElement;
export default LanCloudShowersWaterSolid;
