import React from 'react';

export interface LanCrabThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrabThin(props: LanCrabThinProps): React.ReactElement;
export default LanCrabThin;
