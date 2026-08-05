import React from 'react';

export interface LanHeadsetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadsetThin(props: LanHeadsetThinProps): React.ReactElement;
export default LanHeadsetThin;
