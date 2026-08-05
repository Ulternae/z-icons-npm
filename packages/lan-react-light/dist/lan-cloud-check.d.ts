import React from 'react';

export interface LanCloudCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudCheck(props: LanCloudCheckProps): React.ReactElement;
export default LanCloudCheck;
