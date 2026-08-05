import React from 'react';

export interface LanImageBrokenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageBrokenThin(props: LanImageBrokenThinProps): React.ReactElement;
export default LanImageBrokenThin;
