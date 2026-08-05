import React from 'react';

export interface LanBellConciergeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellConcierge(props: LanBellConciergeProps): React.ReactElement;
export default LanBellConcierge;
