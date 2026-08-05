import React from 'react';

export interface LanKettlebellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKettlebellSolid(props: LanKettlebellSolidProps): React.ReactElement;
export default LanKettlebellSolid;
