import React from 'react';

export interface LanSquareAmpersandThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareAmpersandThin(props: LanSquareAmpersandThinProps): React.ReactElement;
export default LanSquareAmpersandThin;
