import React from 'react';

export interface LanBoxesPackingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxesPackingSolid(props: LanBoxesPackingSolidProps): React.ReactElement;
export default LanBoxesPackingSolid;
