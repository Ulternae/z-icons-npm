import React from 'react';

export interface LanTacoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTacoThin(props: LanTacoThinProps): React.ReactElement;
export default LanTacoThin;
