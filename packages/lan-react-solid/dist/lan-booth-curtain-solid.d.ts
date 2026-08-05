import React from 'react';

export interface LanBoothCurtainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoothCurtainSolid(props: LanBoothCurtainSolidProps): React.ReactElement;
export default LanBoothCurtainSolid;
