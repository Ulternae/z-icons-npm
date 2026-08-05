import React from 'react';

export interface LanDownUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownUpThin(props: LanDownUpThinProps): React.ReactElement;
export default LanDownUpThin;
