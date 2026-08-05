import React from 'react';

export interface LanKiwiBirdThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKiwiBirdThin(props: LanKiwiBirdThinProps): React.ReactElement;
export default LanKiwiBirdThin;
