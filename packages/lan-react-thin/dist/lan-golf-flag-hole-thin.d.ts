import React from 'react';

export interface LanGolfFlagHoleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGolfFlagHoleThin(props: LanGolfFlagHoleThinProps): React.ReactElement;
export default LanGolfFlagHoleThin;
