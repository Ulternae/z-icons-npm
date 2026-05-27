import React from 'react';

export interface NeoFoldersRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFoldersRegularDuo: React.FC<NeoFoldersRegularDuoProps>;
export default NeoFoldersRegularDuo;
