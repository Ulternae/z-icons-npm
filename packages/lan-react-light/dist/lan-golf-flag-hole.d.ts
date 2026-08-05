import React from 'react';

export interface LanGolfFlagHoleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGolfFlagHole(props: LanGolfFlagHoleProps): React.ReactElement;
export default LanGolfFlagHole;
