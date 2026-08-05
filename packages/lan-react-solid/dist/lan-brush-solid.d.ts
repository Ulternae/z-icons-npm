import React from 'react';

export interface LanBrushSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrushSolid(props: LanBrushSolidProps): React.ReactElement;
export default LanBrushSolid;
