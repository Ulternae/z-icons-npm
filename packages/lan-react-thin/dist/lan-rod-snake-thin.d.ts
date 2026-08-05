import React from 'react';

export interface LanRodSnakeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRodSnakeThin(props: LanRodSnakeThinProps): React.ReactElement;
export default LanRodSnakeThin;
