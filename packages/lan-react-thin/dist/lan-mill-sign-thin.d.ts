import React from 'react';

export interface LanMillSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMillSignThin(props: LanMillSignThinProps): React.ReactElement;
export default LanMillSignThin;
