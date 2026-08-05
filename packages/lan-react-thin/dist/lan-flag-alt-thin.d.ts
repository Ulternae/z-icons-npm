import React from 'react';

export interface LanFlagAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlagAltThin(props: LanFlagAltThinProps): React.ReactElement;
export default LanFlagAltThin;
