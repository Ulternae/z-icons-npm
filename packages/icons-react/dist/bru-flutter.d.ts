import React from 'react';

export interface BruFlutterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruFlutter: React.FC<BruFlutterProps>;
export default BruFlutter;
