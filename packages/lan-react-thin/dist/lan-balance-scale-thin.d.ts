import React from 'react';

export interface LanBalanceScaleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBalanceScaleThin(props: LanBalanceScaleThinProps): React.ReactElement;
export default LanBalanceScaleThin;
