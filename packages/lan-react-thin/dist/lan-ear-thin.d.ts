import React from 'react';

export interface LanEarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarThin(props: LanEarThinProps): React.ReactElement;
export default LanEarThin;
