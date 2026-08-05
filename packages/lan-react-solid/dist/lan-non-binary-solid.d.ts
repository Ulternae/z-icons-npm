import React from 'react';

export interface LanNonBinarySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNonBinarySolid(props: LanNonBinarySolidProps): React.ReactElement;
export default LanNonBinarySolid;
