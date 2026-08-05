import React from 'react';

export interface LanSquareCThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCThin(props: LanSquareCThinProps): React.ReactElement;
export default LanSquareCThin;
