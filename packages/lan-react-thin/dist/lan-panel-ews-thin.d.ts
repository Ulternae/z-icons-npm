import React from 'react';

export interface LanPanelEwsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPanelEwsThin(props: LanPanelEwsThinProps): React.ReactElement;
export default LanPanelEwsThin;
