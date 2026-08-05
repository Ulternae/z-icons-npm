import React from 'react';

export interface LanHeaderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeaderThin(props: LanHeaderThinProps): React.ReactElement;
export default LanHeaderThin;
