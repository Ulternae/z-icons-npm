import React from 'react';

export interface LanCloudShowersHeavyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudShowersHeavy(props: LanCloudShowersHeavyProps): React.ReactElement;
export default LanCloudShowersHeavy;
