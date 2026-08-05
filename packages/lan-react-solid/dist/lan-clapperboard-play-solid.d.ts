import React from 'react';

export interface LanClapperboardPlaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClapperboardPlaySolid(props: LanClapperboardPlaySolidProps): React.ReactElement;
export default LanClapperboardPlaySolid;
