import React from 'react';

export interface LanNarwhalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNarwhalSolid(props: LanNarwhalSolidProps): React.ReactElement;
export default LanNarwhalSolid;
