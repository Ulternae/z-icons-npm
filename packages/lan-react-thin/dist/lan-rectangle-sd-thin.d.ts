import React from 'react';

export interface LanRectangleSdThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleSdThin(props: LanRectangleSdThinProps): React.ReactElement;
export default LanRectangleSdThin;
