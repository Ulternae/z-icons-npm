import React from 'react';

export interface LanWormSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWormSolid(props: LanWormSolidProps): React.ReactElement;
export default LanWormSolid;
