import React from 'react';

export interface LanRectangle4kThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangle4kThin(props: LanRectangle4kThinProps): React.ReactElement;
export default LanRectangle4kThin;
