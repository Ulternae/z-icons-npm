import React from 'react';

export interface LanMobileScreenButtonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileScreenButton(props: LanMobileScreenButtonProps): React.ReactElement;
export default LanMobileScreenButton;
