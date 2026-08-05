import React from 'react';

export interface LanSquareZThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareZThin(props: LanSquareZThinProps): React.ReactElement;
export default LanSquareZThin;
