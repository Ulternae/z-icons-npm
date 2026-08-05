import React from 'react';

export interface LanFileCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCheckThin(props: LanFileCheckThinProps): React.ReactElement;
export default LanFileCheckThin;
