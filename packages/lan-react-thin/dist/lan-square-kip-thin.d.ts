import React from 'react';

export interface LanSquareKipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareKipThin(props: LanSquareKipThinProps): React.ReactElement;
export default LanSquareKipThin;
