import React from 'react';

export interface LanRulerTriangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRulerTriangleSolid(props: LanRulerTriangleSolidProps): React.ReactElement;
export default LanRulerTriangleSolid;
