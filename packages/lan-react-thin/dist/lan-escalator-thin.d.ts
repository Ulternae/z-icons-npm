import React from 'react';

export interface LanEscalatorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEscalatorThin(props: LanEscalatorThinProps): React.ReactElement;
export default LanEscalatorThin;
