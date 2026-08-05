import React from 'react';

export interface LanToggleLargeOnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToggleLargeOnSolid(props: LanToggleLargeOnSolidProps): React.ReactElement;
export default LanToggleLargeOnSolid;
