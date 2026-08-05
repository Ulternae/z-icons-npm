import React from 'react';

export interface LanTextWidthSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTextWidthSolid(props: LanTextWidthSolidProps): React.ReactElement;
export default LanTextWidthSolid;
