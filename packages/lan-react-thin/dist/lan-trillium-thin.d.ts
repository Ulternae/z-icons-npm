import React from 'react';

export interface LanTrilliumThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrilliumThin(props: LanTrilliumThinProps): React.ReactElement;
export default LanTrilliumThin;
