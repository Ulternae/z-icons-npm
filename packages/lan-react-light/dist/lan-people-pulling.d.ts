import React from 'react';

export interface LanPeoplePullingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeoplePulling(props: LanPeoplePullingProps): React.ReactElement;
export default LanPeoplePulling;
