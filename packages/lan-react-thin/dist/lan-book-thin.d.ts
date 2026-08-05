import React from 'react';

export interface LanBookThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookThin(props: LanBookThinProps): React.ReactElement;
export default LanBookThin;
