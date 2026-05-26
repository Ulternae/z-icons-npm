import React from 'react';

export interface LanTableLayoutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableLayout: React.FC<LanTableLayoutProps>;
export default LanTableLayout;
