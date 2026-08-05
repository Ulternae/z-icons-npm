import React from 'react';

export interface LanBookBibleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookBibleThin(props: LanBookBibleThinProps): React.ReactElement;
export default LanBookBibleThin;
