import React from 'react';

export interface LanCloudCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudCheckRegular(props: LanCloudCheckRegularProps): React.ReactElement;
export default LanCloudCheckRegular;
