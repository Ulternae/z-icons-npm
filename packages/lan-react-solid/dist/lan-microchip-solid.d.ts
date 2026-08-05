import React from 'react';

export interface LanMicrochipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMicrochipSolid(props: LanMicrochipSolidProps): React.ReactElement;
export default LanMicrochipSolid;
