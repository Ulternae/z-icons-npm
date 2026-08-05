import React from 'react';

export interface LanTreeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreeThin(props: LanTreeThinProps): React.ReactElement;
export default LanTreeThin;
