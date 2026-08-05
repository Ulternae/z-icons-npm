import React from 'react';

export interface LanSquidThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquidThin(props: LanSquidThinProps): React.ReactElement;
export default LanSquidThin;
