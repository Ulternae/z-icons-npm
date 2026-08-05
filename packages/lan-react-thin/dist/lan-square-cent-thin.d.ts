import React from 'react';

export interface LanSquareCentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCentThin(props: LanSquareCentThinProps): React.ReactElement;
export default LanSquareCentThin;
