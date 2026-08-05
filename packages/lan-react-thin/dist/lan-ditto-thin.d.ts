import React from 'react';

export interface LanDittoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDittoThin(props: LanDittoThinProps): React.ReactElement;
export default LanDittoThin;
