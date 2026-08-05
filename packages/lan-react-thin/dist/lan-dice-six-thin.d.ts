import React from 'react';

export interface LanDiceSixThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceSixThin(props: LanDiceSixThinProps): React.ReactElement;
export default LanDiceSixThin;
