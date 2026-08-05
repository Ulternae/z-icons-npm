import React from 'react';

export interface LanBookDeadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookDead(props: LanBookDeadProps): React.ReactElement;
export default LanBookDead;
