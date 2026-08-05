import React from 'react';

export interface LanCloudBinaryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudBinaryRegular(props: LanCloudBinaryRegularProps): React.ReactElement;
export default LanCloudBinaryRegular;
