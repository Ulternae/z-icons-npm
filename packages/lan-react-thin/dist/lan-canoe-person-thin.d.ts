import React from 'react';

export interface LanCanoePersonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCanoePersonThin(props: LanCanoePersonThinProps): React.ReactElement;
export default LanCanoePersonThin;
