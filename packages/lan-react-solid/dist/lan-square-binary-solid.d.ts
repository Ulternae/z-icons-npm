import React from 'react';

export interface LanSquareBinarySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareBinarySolid(props: LanSquareBinarySolidProps): React.ReactElement;
export default LanSquareBinarySolid;
