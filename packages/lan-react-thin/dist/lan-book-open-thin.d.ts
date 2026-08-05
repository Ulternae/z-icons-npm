import React from 'react';

export interface LanBookOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookOpenThin(props: LanBookOpenThinProps): React.ReactElement;
export default LanBookOpenThin;
