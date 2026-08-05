import React from 'react';

export interface LanMoundSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoundSolid(props: LanMoundSolidProps): React.ReactElement;
export default LanMoundSolid;
