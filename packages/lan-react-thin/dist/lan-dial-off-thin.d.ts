import React from 'react';

export interface LanDialOffThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialOffThin(props: LanDialOffThinProps): React.ReactElement;
export default LanDialOffThin;
