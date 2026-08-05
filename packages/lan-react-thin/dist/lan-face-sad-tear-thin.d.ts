import React from 'react';

export interface LanFaceSadTearThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSadTearThin(props: LanFaceSadTearThinProps): React.ReactElement;
export default LanFaceSadTearThin;
