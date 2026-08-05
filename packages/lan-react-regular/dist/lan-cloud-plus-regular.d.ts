import React from 'react';

export interface LanCloudPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudPlusRegular(props: LanCloudPlusRegularProps): React.ReactElement;
export default LanCloudPlusRegular;
