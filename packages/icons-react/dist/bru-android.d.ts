import React from 'react';

export interface BruAndroidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAndroid: React.FC<BruAndroidProps>;
export default BruAndroid;
