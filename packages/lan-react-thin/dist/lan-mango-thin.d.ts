import React from 'react';

export interface LanMangoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMangoThin(props: LanMangoThinProps): React.ReactElement;
export default LanMangoThin;
