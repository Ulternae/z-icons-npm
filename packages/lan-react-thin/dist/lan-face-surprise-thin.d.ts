import React from 'react';

export interface LanFaceSurpriseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSurpriseThin(props: LanFaceSurpriseThinProps): React.ReactElement;
export default LanFaceSurpriseThin;
