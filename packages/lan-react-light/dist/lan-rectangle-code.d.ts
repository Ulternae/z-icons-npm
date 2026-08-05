import React from 'react';

export interface LanRectangleCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleCode(props: LanRectangleCodeProps): React.ReactElement;
export default LanRectangleCode;
