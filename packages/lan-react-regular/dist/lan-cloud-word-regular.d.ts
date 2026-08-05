import React from 'react';

export interface LanCloudWordRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudWordRegular(props: LanCloudWordRegularProps): React.ReactElement;
export default LanCloudWordRegular;
