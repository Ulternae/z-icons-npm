import React from 'react';

export interface LanDialHighThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialHighThin(props: LanDialHighThinProps): React.ReactElement;
export default LanDialHighThin;
