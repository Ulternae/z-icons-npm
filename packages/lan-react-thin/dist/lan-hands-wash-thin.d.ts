import React from 'react';

export interface LanHandsWashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsWashThin(props: LanHandsWashThinProps): React.ReactElement;
export default LanHandsWashThin;
