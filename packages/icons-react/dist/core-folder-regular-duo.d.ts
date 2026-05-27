import React from 'react';

export interface CoreFolderRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFolderRegularDuo: React.FC<CoreFolderRegularDuoProps>;
export default CoreFolderRegularDuo;
