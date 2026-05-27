import React from 'react';

export interface CoreFolderPlusRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFolderPlusRegularDuo: React.FC<CoreFolderPlusRegularDuoProps>;
export default CoreFolderPlusRegularDuo;
