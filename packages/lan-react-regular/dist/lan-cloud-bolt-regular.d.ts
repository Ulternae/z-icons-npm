import React from 'react';

export interface LanCloudBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudBoltRegular(props: LanCloudBoltRegularProps): React.ReactElement;
export default LanCloudBoltRegular;
