import React from 'react';

export interface CoreBugRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBugRegularDuo: React.FC<CoreBugRegularDuoProps>;
export default CoreBugRegularDuo;
