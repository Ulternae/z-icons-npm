import React from 'react';

export interface LanMarsStrokeHSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsStrokeHSolid(props: LanMarsStrokeHSolidProps): React.ReactElement;
export default LanMarsStrokeHSolid;
