import React from 'react';

export interface LanMobileRotateThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileRotateThin(props: LanMobileRotateThinProps): React.ReactElement;
export default LanMobileRotateThin;
