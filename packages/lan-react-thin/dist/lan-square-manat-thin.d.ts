import React from 'react';

export interface LanSquareManatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareManatThin(props: LanSquareManatThinProps): React.ReactElement;
export default LanSquareManatThin;
