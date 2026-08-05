import React from 'react';

export interface LanScreencastThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScreencastThin(props: LanScreencastThinProps): React.ReactElement;
export default LanScreencastThin;
