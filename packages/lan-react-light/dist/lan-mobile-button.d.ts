import React from 'react';

export interface LanMobileButtonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileButton(props: LanMobileButtonProps): React.ReactElement;
export default LanMobileButton;
