import React from 'react';

export interface LanBookUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookUserThin(props: LanBookUserThinProps): React.ReactElement;
export default LanBookUserThin;
