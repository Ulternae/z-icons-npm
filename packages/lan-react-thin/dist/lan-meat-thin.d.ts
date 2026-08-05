import React from 'react';

export interface LanMeatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeatThin(props: LanMeatThinProps): React.ReactElement;
export default LanMeatThin;
