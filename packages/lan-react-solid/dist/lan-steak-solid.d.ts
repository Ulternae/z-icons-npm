import React from 'react';

export interface LanSteakSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSteakSolid(props: LanSteakSolidProps): React.ReactElement;
export default LanSteakSolid;
