import React from 'react';

export interface LanGingerbreadManSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGingerbreadManSolid(props: LanGingerbreadManSolidProps): React.ReactElement;
export default LanGingerbreadManSolid;
