import React from 'react';

export interface LanKeyboardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKeyboardThin(props: LanKeyboardThinProps): React.ReactElement;
export default LanKeyboardThin;
