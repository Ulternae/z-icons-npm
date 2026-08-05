import React from 'react';

export interface LanBandAidThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBandAidThin(props: LanBandAidThinProps): React.ReactElement;
export default LanBandAidThin;
