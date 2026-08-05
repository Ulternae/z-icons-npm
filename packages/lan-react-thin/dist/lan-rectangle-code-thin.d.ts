import React from 'react';

export interface LanRectangleCodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleCodeThin(props: LanRectangleCodeThinProps): React.ReactElement;
export default LanRectangleCodeThin;
