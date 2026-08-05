import React from 'react';

export interface LanSquareBahtSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareBahtSolid(props: LanSquareBahtSolidProps): React.ReactElement;
export default LanSquareBahtSolid;
