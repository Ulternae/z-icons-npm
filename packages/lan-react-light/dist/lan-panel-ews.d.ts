import React from 'react';

export interface LanPanelEwsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPanelEws(props: LanPanelEwsProps): React.ReactElement;
export default LanPanelEws;
