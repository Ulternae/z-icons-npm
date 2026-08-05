import React from 'react';

export interface LanCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheckThin(props: LanCheckThinProps): React.ReactElement;
export default LanCheckThin;
