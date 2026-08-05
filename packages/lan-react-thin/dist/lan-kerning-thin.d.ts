import React from 'react';

export interface LanKerningThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKerningThin(props: LanKerningThinProps): React.ReactElement;
export default LanKerningThin;
