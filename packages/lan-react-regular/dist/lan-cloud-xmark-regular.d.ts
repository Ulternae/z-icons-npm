import React from 'react';

export interface LanCloudXmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudXmarkRegular(props: LanCloudXmarkRegularProps): React.ReactElement;
export default LanCloudXmarkRegular;
