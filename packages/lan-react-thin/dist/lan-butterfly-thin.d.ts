import React from 'react';

export interface LanButterflyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanButterflyThin(props: LanButterflyThinProps): React.ReactElement;
export default LanButterflyThin;
