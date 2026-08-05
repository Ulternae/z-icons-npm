import React from 'react';

export interface LanCarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarThin(props: LanCarThinProps): React.ReactElement;
export default LanCarThin;
