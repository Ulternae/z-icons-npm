import React from 'react';

export interface LanTrowelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrowelSolid(props: LanTrowelSolidProps): React.ReactElement;
export default LanTrowelSolid;
