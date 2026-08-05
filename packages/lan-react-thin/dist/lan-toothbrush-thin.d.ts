import React from 'react';

export interface LanToothbrushThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToothbrushThin(props: LanToothbrushThinProps): React.ReactElement;
export default LanToothbrushThin;
