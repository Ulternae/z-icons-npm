import React from 'react';

export interface LanRodSnakeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRodSnakeRegular(props: LanRodSnakeRegularProps): React.ReactElement;
export default LanRodSnakeRegular;
