import React from 'react';

export interface LanArrowsToDotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsToDotRegular(props: LanArrowsToDotRegularProps): React.ReactElement;
export default LanArrowsToDotRegular;
