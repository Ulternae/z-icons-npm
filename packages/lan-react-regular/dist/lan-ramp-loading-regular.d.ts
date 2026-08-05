import React from 'react';

export interface LanRampLoadingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRampLoadingRegular(props: LanRampLoadingRegularProps): React.ReactElement;
export default LanRampLoadingRegular;
