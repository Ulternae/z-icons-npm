import React from 'react';

export interface LanBoxUsdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxUsd(props: LanBoxUsdProps): React.ReactElement;
export default LanBoxUsd;
