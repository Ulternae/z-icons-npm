import React from 'react';

export interface LanCopySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCopySolid(props: LanCopySolidProps): React.ReactElement;
export default LanCopySolid;
