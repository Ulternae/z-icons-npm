import React from 'react';

export interface LanBoxUsdThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxUsdThin(props: LanBoxUsdThinProps): React.ReactElement;
export default LanBoxUsdThin;
