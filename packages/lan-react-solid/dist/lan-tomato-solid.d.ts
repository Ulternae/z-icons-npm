import React from 'react';

export interface LanTomatoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTomatoSolid(props: LanTomatoSolidProps): React.ReactElement;
export default LanTomatoSolid;
