import React from 'react';

export interface LanSquareAThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareAThin(props: LanSquareAThinProps): React.ReactElement;
export default LanSquareAThin;
