import React from 'react';

export interface LanShelvesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShelvesSolid(props: LanShelvesSolidProps): React.ReactElement;
export default LanShelvesSolid;
