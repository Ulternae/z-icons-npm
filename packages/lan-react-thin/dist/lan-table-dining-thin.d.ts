import React from 'react';

export interface LanTableDiningThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableDiningThin(props: LanTableDiningThinProps): React.ReactElement;
export default LanTableDiningThin;
