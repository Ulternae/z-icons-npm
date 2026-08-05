import React from 'react';

export interface LanTableLayoutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableLayout(props: LanTableLayoutProps): React.ReactElement;
export default LanTableLayout;
