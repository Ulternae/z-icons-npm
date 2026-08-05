import React from 'react';

export interface LanDialMaxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialMaxThin(props: LanDialMaxThinProps): React.ReactElement;
export default LanDialMaxThin;
