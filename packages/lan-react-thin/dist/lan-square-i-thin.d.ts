import React from 'react';

export interface LanSquareIThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareIThin(props: LanSquareIThinProps): React.ReactElement;
export default LanSquareIThin;
