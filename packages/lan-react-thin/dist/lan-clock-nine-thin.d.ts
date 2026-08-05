import React from 'react';

export interface LanClockNineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockNineThin(props: LanClockNineThinProps): React.ReactElement;
export default LanClockNineThin;
