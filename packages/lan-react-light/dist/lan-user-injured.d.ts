import React from 'react';

export interface LanUserInjuredProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserInjured(props: LanUserInjuredProps): React.ReactElement;
export default LanUserInjured;
