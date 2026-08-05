import React from 'react';

export interface LanSproutSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSproutSolid(props: LanSproutSolidProps): React.ReactElement;
export default LanSproutSolid;
