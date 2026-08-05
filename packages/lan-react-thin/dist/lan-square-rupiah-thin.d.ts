import React from 'react';

export interface LanSquareRupiahThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareRupiahThin(props: LanSquareRupiahThinProps): React.ReactElement;
export default LanSquareRupiahThin;
