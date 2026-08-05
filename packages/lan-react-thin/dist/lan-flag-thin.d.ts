import React from 'react';

export interface LanFlagThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlagThin(props: LanFlagThinProps): React.ReactElement;
export default LanFlagThin;
