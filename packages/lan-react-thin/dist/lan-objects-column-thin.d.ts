import React from 'react';

export interface LanObjectsColumnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectsColumnThin(props: LanObjectsColumnThinProps): React.ReactElement;
export default LanObjectsColumnThin;
