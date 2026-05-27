import React from 'react';

export interface NeoFilesRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFilesRegularDuo: React.FC<NeoFilesRegularDuoProps>;
export default NeoFilesRegularDuo;
