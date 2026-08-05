import React from 'react';

export interface MinaLayoutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLayout(props: MinaLayoutProps): React.ReactElement;
export default MinaLayout;
