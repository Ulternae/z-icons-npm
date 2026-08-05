import React from 'react';

export interface LanRampLoadingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRampLoadingThin(props: LanRampLoadingThinProps): React.ReactElement;
export default LanRampLoadingThin;
