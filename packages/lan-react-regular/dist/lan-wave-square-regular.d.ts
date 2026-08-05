import React from 'react';

export interface LanWaveSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveSquareRegular(props: LanWaveSquareRegularProps): React.ReactElement;
export default LanWaveSquareRegular;
