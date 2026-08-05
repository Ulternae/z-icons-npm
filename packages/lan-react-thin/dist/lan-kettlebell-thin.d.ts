import React from 'react';

export interface LanKettlebellThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKettlebellThin(props: LanKettlebellThinProps): React.ReactElement;
export default LanKettlebellThin;
