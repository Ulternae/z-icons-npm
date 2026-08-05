import React from 'react';

export interface LanRepeatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRepeatSolid(props: LanRepeatSolidProps): React.ReactElement;
export default LanRepeatSolid;
