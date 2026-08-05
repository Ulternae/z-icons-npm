import React from 'react';

export interface LanCloudShowersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudShowers(props: LanCloudShowersProps): React.ReactElement;
export default LanCloudShowers;
