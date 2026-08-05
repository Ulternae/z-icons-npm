import React from 'react';

export interface LanLungsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLungsSolid(props: LanLungsSolidProps): React.ReactElement;
export default LanLungsSolid;
