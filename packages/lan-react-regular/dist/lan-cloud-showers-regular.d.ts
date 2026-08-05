import React from 'react';

export interface LanCloudShowersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudShowersRegular(props: LanCloudShowersRegularProps): React.ReactElement;
export default LanCloudShowersRegular;
