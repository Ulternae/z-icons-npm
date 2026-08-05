import React from 'react';

export interface LanFlorinSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlorinSignThin(props: LanFlorinSignThinProps): React.ReactElement;
export default LanFlorinSignThin;
