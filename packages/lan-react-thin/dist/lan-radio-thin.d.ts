import React from 'react';

export interface LanRadioThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRadioThin(props: LanRadioThinProps): React.ReactElement;
export default LanRadioThin;
