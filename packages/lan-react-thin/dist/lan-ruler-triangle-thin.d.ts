import React from 'react';

export interface LanRulerTriangleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRulerTriangleThin(props: LanRulerTriangleThinProps): React.ReactElement;
export default LanRulerTriangleThin;
