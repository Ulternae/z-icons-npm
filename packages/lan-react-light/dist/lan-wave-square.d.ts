import React from 'react';

export interface LanWaveSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveSquare(props: LanWaveSquareProps): React.ReactElement;
export default LanWaveSquare;
