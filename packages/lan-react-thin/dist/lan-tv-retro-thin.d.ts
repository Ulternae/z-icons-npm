import React from 'react';

export interface LanTvRetroThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTvRetroThin(props: LanTvRetroThinProps): React.ReactElement;
export default LanTvRetroThin;
