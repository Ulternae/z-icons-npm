import React from 'react';

export interface LanSquareManatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareManat(props: LanSquareManatProps): React.ReactElement;
export default LanSquareManat;
