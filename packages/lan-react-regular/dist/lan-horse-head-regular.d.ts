import React from 'react';

export interface LanHorseHeadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHorseHeadRegular(props: LanHorseHeadRegularProps): React.ReactElement;
export default LanHorseHeadRegular;
