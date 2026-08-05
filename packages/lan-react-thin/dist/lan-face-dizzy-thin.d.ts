import React from 'react';

export interface LanFaceDizzyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceDizzyThin(props: LanFaceDizzyThinProps): React.ReactElement;
export default LanFaceDizzyThin;
