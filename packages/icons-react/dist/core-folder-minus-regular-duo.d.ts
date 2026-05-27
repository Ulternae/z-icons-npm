import React from 'react';

export interface CoreFolderMinusRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFolderMinusRegularDuo: React.FC<CoreFolderMinusRegularDuoProps>;
export default CoreFolderMinusRegularDuo;
