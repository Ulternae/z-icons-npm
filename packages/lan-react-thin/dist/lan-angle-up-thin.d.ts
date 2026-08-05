import React from 'react';

export interface LanAngleUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAngleUpThin(props: LanAngleUpThinProps): React.ReactElement;
export default LanAngleUpThin;
