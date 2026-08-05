import React from 'react';

export interface LanEggThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEggThin(props: LanEggThinProps): React.ReactElement;
export default LanEggThin;
