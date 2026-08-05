import React from 'react';

export interface LanBookDeadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookDeadThin(props: LanBookDeadThinProps): React.ReactElement;
export default LanBookDeadThin;
