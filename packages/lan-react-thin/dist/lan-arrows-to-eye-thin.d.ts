import React from 'react';

export interface LanArrowsToEyeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsToEyeThin(props: LanArrowsToEyeThinProps): React.ReactElement;
export default LanArrowsToEyeThin;
