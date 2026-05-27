import React from 'react';

export interface NeoSidebarRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSidebarRegularDuo: React.FC<NeoSidebarRegularDuoProps>;
export default NeoSidebarRegularDuo;
