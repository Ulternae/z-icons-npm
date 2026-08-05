import React from 'react';

export interface LanCoinBlankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoinBlank(props: LanCoinBlankProps): React.ReactElement;
export default LanCoinBlank;
