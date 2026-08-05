import React from 'react';

export interface LanPanFryingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPanFrying(props: LanPanFryingProps): React.ReactElement;
export default LanPanFrying;
