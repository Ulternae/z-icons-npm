import React from 'react';

export interface LanArrowsCrossRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsCrossRegular(props: LanArrowsCrossRegularProps): React.ReactElement;
export default LanArrowsCrossRegular;
