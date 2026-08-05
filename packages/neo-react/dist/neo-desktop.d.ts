import React from 'react';

export interface NeoDesktopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoDesktop(props: NeoDesktopProps): React.ReactElement;
export default NeoDesktop;
