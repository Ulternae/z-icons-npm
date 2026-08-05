import React from 'react';

export interface LanCoinFrontProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoinFront(props: LanCoinFrontProps): React.ReactElement;
export default LanCoinFront;
