import React from 'react';

export interface LanTabletScreenButtonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTabletScreenButton(props: LanTabletScreenButtonProps): React.ReactElement;
export default LanTabletScreenButton;
