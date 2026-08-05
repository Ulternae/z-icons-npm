import React from 'react';

export interface LanCloudMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudMinus(props: LanCloudMinusProps): React.ReactElement;
export default LanCloudMinus;
