import React from 'react';

export interface LanTabletButtonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTabletButton(props: LanTabletButtonProps): React.ReactElement;
export default LanTabletButton;
