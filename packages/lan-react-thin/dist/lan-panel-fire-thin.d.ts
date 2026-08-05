import React from 'react';

export interface LanPanelFireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPanelFireThin(props: LanPanelFireThinProps): React.ReactElement;
export default LanPanelFireThin;
