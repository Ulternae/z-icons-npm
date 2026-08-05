import React from 'react';

export interface NeoDesktopRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoDesktopRegularDuo(props: NeoDesktopRegularDuoProps): React.ReactElement;
export default NeoDesktopRegularDuo;
