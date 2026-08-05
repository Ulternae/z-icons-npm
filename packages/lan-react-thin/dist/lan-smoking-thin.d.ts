import React from 'react';

export interface LanSmokingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSmokingThin(props: LanSmokingThinProps): React.ReactElement;
export default LanSmokingThin;
