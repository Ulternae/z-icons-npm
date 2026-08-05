import React from 'react';

export interface LanFlagCheckeredSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlagCheckeredSolid(props: LanFlagCheckeredSolidProps): React.ReactElement;
export default LanFlagCheckeredSolid;
