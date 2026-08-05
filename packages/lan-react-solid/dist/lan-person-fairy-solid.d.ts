import React from 'react';

export interface LanPersonFairySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonFairySolid(props: LanPersonFairySolidProps): React.ReactElement;
export default LanPersonFairySolid;
