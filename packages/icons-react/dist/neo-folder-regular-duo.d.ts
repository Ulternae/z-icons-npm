import React from 'react';

export interface NeoFolderRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFolderRegularDuo: React.FC<NeoFolderRegularDuoProps>;
export default NeoFolderRegularDuo;
