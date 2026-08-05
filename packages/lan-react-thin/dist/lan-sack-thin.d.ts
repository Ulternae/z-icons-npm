import React from 'react';

export interface LanSackThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSackThin(props: LanSackThinProps): React.ReactElement;
export default LanSackThin;
