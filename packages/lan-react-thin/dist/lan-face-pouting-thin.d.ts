import React from 'react';

export interface LanFacePoutingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFacePoutingThin(props: LanFacePoutingThinProps): React.ReactElement;
export default LanFacePoutingThin;
