import React from 'react';

export interface LanIndustrySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIndustrySolid(props: LanIndustrySolidProps): React.ReactElement;
export default LanIndustrySolid;
