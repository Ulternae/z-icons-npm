import React from 'react';

export interface LanTextHeightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTextHeightThin(props: LanTextHeightThinProps): React.ReactElement;
export default LanTextHeightThin;
