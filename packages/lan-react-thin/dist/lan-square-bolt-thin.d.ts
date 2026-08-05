import React from 'react';

export interface LanSquareBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareBoltThin(props: LanSquareBoltThinProps): React.ReactElement;
export default LanSquareBoltThin;
