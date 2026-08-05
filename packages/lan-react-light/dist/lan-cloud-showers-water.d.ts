import React from 'react';

export interface LanCloudShowersWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudShowersWater(props: LanCloudShowersWaterProps): React.ReactElement;
export default LanCloudShowersWater;
