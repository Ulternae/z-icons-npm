import React from 'react';

export interface LanFacePensiveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFacePensiveThin(props: LanFacePensiveThinProps): React.ReactElement;
export default LanFacePensiveThin;
