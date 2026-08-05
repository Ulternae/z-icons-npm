import React from 'react';

export interface LanHandHoldingBoxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHoldingBoxThin(props: LanHandHoldingBoxThinProps): React.ReactElement;
export default LanHandHoldingBoxThin;
