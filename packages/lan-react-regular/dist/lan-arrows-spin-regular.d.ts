import React from 'react';

export interface LanArrowsSpinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsSpinRegular(props: LanArrowsSpinRegularProps): React.ReactElement;
export default LanArrowsSpinRegular;
