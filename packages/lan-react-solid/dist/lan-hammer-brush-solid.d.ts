import React from 'react';

export interface LanHammerBrushSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHammerBrushSolid(props: LanHammerBrushSolidProps): React.ReactElement;
export default LanHammerBrushSolid;
