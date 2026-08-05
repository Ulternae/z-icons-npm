import React from 'react';

export interface LanPancakesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPancakesSolid(props: LanPancakesSolidProps): React.ReactElement;
export default LanPancakesSolid;
