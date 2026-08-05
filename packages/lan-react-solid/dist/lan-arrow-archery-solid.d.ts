import React from 'react';

export interface LanArrowArcherySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowArcherySolid(props: LanArrowArcherySolidProps): React.ReactElement;
export default LanArrowArcherySolid;
