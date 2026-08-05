import React from 'react';

export interface LanCloudShowersHeavyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudShowersHeavyThin(props: LanCloudShowersHeavyThinProps): React.ReactElement;
export default LanCloudShowersHeavyThin;
