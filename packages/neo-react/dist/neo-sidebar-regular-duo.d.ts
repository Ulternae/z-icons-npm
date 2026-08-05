import React from 'react';

export interface NeoSidebarRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSidebarRegularDuo(props: NeoSidebarRegularDuoProps): React.ReactElement;
export default NeoSidebarRegularDuo;
