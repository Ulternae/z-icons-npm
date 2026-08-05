import React from 'react';

export interface LanShowerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShowerThin(props: LanShowerThinProps): React.ReactElement;
export default LanShowerThin;
