import React from 'react';

export interface LanFacePleadingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFacePleadingThin(props: LanFacePleadingThinProps): React.ReactElement;
export default LanFacePleadingThin;
