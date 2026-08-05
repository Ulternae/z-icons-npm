import React from 'react';

export interface LanCloudPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudPlus(props: LanCloudPlusProps): React.ReactElement;
export default LanCloudPlus;
