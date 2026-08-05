import React from 'react';

export interface LanTtyAnswerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTtyAnswerRegular(props: LanTtyAnswerRegularProps): React.ReactElement;
export default LanTtyAnswerRegular;
