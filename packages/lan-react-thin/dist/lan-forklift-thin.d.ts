import React from 'react';

export interface LanForkliftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanForkliftThin(props: LanForkliftThinProps): React.ReactElement;
export default LanForkliftThin;
