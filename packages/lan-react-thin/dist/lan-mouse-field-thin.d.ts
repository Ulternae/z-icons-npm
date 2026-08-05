import React from 'react';

export interface LanMouseFieldThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMouseFieldThin(props: LanMouseFieldThinProps): React.ReactElement;
export default LanMouseFieldThin;
