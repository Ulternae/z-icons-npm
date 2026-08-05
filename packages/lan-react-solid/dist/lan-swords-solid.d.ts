import React from 'react';

export interface LanSwordsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwordsSolid(props: LanSwordsSolidProps): React.ReactElement;
export default LanSwordsSolid;
