import React from 'react';

export interface LanScarfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScarfThin(props: LanScarfThinProps): React.ReactElement;
export default LanScarfThin;
