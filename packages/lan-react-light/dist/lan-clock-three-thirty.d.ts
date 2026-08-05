import React from 'react';

export interface LanClockThreeThirtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockThreeThirty(props: LanClockThreeThirtyProps): React.ReactElement;
export default LanClockThreeThirty;
