import React from 'react';

export interface LanHotdogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHotdogSolid(props: LanHotdogSolidProps): React.ReactElement;
export default LanHotdogSolid;
