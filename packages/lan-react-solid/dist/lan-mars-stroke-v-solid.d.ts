import React from 'react';

export interface LanMarsStrokeVSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsStrokeVSolid(props: LanMarsStrokeVSolidProps): React.ReactElement;
export default LanMarsStrokeVSolid;
