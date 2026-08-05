import React from 'react';

export interface LanFlagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlagSolid(props: LanFlagSolidProps): React.ReactElement;
export default LanFlagSolid;
