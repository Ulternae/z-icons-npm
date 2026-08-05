import React from 'react';

export interface LanBinarySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinarySolid(props: LanBinarySolidProps): React.ReactElement;
export default LanBinarySolid;
