import React from 'react';

export interface LanCloudSleetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudSleetRegular(props: LanCloudSleetRegularProps): React.ReactElement;
export default LanCloudSleetRegular;
