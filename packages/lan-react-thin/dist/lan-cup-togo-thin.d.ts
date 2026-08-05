import React from 'react';

export interface LanCupTogoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCupTogoThin(props: LanCupTogoThinProps): React.ReactElement;
export default LanCupTogoThin;
