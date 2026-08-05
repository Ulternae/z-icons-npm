import React from 'react';

export interface LanVolcanoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolcanoSolid(props: LanVolcanoSolidProps): React.ReactElement;
export default LanVolcanoSolid;
