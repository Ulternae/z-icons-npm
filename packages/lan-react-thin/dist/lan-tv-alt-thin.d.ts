import React from 'react';

export interface LanTvAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTvAltThin(props: LanTvAltThinProps): React.ReactElement;
export default LanTvAltThin;
