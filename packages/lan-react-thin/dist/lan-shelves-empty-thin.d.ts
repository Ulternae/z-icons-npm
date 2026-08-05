import React from 'react';

export interface LanShelvesEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShelvesEmptyThin(props: LanShelvesEmptyThinProps): React.ReactElement;
export default LanShelvesEmptyThin;
