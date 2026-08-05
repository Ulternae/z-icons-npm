import React from 'react';

export interface LanWThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWThin(props: LanWThinProps): React.ReactElement;
export default LanWThin;
