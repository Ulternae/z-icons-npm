import React from 'react';

export interface LanRepublicanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRepublicanThin(props: LanRepublicanThinProps): React.ReactElement;
export default LanRepublicanThin;
