import React from 'react';

export interface LanCloudsSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudsSun(props: LanCloudsSunProps): React.ReactElement;
export default LanCloudsSun;
