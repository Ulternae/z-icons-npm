import React from 'react';

export interface LanRestroomSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRestroomSolid(props: LanRestroomSolidProps): React.ReactElement;
export default LanRestroomSolid;
