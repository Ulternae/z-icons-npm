import React from 'react';

export interface MinaLayoutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLayout: React.FC<MinaLayoutProps>;
export default MinaLayout;
