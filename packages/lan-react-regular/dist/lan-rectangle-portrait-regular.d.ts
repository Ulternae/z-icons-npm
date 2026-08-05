import React from 'react';

export interface LanRectanglePortraitRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectanglePortraitRegular(props: LanRectanglePortraitRegularProps): React.ReactElement;
export default LanRectanglePortraitRegular;
