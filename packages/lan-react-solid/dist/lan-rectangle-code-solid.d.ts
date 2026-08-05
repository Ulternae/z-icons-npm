import React from 'react';

export interface LanRectangleCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleCodeSolid(props: LanRectangleCodeSolidProps): React.ReactElement;
export default LanRectangleCodeSolid;
