import React from 'react';

export interface LanPersonPinballThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonPinballThin(props: LanPersonPinballThinProps): React.ReactElement;
export default LanPersonPinballThin;
