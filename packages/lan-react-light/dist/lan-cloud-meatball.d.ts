import React from 'react';

export interface LanCloudMeatballProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudMeatball(props: LanCloudMeatballProps): React.ReactElement;
export default LanCloudMeatball;
