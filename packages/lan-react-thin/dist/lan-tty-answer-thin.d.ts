import React from 'react';

export interface LanTtyAnswerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTtyAnswerThin(props: LanTtyAnswerThinProps): React.ReactElement;
export default LanTtyAnswerThin;
