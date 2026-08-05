import React from 'react';

export interface LanSigmaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSigma(props: LanSigmaProps): React.ReactElement;
export default LanSigma;
