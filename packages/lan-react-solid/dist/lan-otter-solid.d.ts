import React from 'react';

export interface LanOtterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOtterSolid(props: LanOtterSolidProps): React.ReactElement;
export default LanOtterSolid;
