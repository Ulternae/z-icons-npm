import React from 'react';

export interface LanClapperboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClapperboardSolid(props: LanClapperboardSolidProps): React.ReactElement;
export default LanClapperboardSolid;
