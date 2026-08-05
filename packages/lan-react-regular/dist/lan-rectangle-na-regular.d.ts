import React from 'react';

export interface LanRectangleNARegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleNARegular(props: LanRectangleNARegularProps): React.ReactElement;
export default LanRectangleNARegular;
