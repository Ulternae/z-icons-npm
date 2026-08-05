import React from 'react';

export interface LanSquareNfiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareNfiThin(props: LanSquareNfiThinProps): React.ReactElement;
export default LanSquareNfiThin;
