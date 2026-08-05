import React from 'react';

export interface LanHandHoldingUsdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHoldingUsd(props: LanHandHoldingUsdProps): React.ReactElement;
export default LanHandHoldingUsd;
