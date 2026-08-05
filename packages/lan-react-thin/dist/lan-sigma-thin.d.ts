import React from 'react';

export interface LanSigmaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSigmaThin(props: LanSigmaThinProps): React.ReactElement;
export default LanSigmaThin;
