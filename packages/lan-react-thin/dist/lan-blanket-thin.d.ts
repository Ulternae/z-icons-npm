import React from 'react';

export interface LanBlanketThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlanketThin(props: LanBlanketThinProps): React.ReactElement;
export default LanBlanketThin;
