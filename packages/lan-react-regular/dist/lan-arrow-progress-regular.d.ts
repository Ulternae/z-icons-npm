import React from 'react';

export interface LanArrowProgressRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowProgressRegular(props: LanArrowProgressRegularProps): React.ReactElement;
export default LanArrowProgressRegular;
