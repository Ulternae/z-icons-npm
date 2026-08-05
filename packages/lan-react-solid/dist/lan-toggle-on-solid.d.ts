import React from 'react';

export interface LanToggleOnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToggleOnSolid(props: LanToggleOnSolidProps): React.ReactElement;
export default LanToggleOnSolid;
