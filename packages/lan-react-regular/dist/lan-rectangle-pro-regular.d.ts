import React from 'react';

export interface LanRectangleProRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleProRegular(props: LanRectangleProRegularProps): React.ReactElement;
export default LanRectangleProRegular;
