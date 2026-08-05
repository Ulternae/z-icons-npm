import React from 'react';

export interface LanWheatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWheatSolid(props: LanWheatSolidProps): React.ReactElement;
export default LanWheatSolid;
