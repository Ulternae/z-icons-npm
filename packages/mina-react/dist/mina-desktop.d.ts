import React from 'react';

export interface MinaDesktopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDesktop(props: MinaDesktopProps): React.ReactElement;
export default MinaDesktop;
