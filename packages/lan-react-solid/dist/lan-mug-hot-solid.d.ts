import React from 'react';

export interface LanMugHotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMugHotSolid(props: LanMugHotSolidProps): React.ReactElement;
export default LanMugHotSolid;
