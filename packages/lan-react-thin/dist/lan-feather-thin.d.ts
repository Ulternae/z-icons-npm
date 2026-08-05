import React from 'react';

export interface LanFeatherThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFeatherThin(props: LanFeatherThinProps): React.ReactElement;
export default LanFeatherThin;
