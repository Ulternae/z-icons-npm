import React from 'react';

export interface LanRectangle4kSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangle4kSolid(props: LanRectangle4kSolidProps): React.ReactElement;
export default LanRectangle4kSolid;
