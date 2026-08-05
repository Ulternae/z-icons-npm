import React from 'react';

export interface LanCloudFogRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudFogRegular(props: LanCloudFogRegularProps): React.ReactElement;
export default LanCloudFogRegular;
