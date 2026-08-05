import React from 'react';

export interface LanSimCardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSimCardThin(props: LanSimCardThinProps): React.ReactElement;
export default LanSimCardThin;
