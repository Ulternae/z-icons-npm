import React from 'react';

export interface LanRectangleNewRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleNewRegular(props: LanRectangleNewRegularProps): React.ReactElement;
export default LanRectangleNewRegular;
