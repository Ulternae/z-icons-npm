import React from 'react';

export interface LanTurkeyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTurkeyThin(props: LanTurkeyThinProps): React.ReactElement;
export default LanTurkeyThin;
