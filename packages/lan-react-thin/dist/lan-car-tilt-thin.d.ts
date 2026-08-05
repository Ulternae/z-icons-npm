import React from 'react';

export interface LanCarTiltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarTiltThin(props: LanCarTiltThinProps): React.ReactElement;
export default LanCarTiltThin;
