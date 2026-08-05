import React from 'react';

export interface LanArrowArcheryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowArcheryThin(props: LanArrowArcheryThinProps): React.ReactElement;
export default LanArrowArcheryThin;
