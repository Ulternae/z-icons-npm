import React from 'react';

export interface LanBoltAutoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoltAutoSolid(props: LanBoltAutoSolidProps): React.ReactElement;
export default LanBoltAutoSolid;
