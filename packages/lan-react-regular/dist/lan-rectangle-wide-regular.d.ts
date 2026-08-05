import React from 'react';

export interface LanRectangleWideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleWideRegular(props: LanRectangleWideRegularProps): React.ReactElement;
export default LanRectangleWideRegular;
