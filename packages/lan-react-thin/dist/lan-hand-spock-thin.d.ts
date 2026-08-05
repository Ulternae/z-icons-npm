import React from 'react';

export interface LanHandSpockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandSpockThin(props: LanHandSpockThinProps): React.ReactElement;
export default LanHandSpockThin;
