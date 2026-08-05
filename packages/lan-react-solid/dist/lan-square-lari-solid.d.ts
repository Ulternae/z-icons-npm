import React from 'react';

export interface LanSquareLariSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareLariSolid(props: LanSquareLariSolidProps): React.ReactElement;
export default LanSquareLariSolid;
