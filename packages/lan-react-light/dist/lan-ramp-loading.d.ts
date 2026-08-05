import React from 'react';

export interface LanRampLoadingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRampLoading(props: LanRampLoadingProps): React.ReactElement;
export default LanRampLoading;
