import React from 'react';

export interface LanCandleHolderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCandleHolder(props: LanCandleHolderProps): React.ReactElement;
export default LanCandleHolder;
