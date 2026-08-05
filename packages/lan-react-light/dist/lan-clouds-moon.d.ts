import React from 'react';

export interface LanCloudsMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudsMoon(props: LanCloudsMoonProps): React.ReactElement;
export default LanCloudsMoon;
