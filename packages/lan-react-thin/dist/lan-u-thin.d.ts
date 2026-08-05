import React from 'react';

export interface LanUThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUThin(props: LanUThinProps): React.ReactElement;
export default LanUThin;
