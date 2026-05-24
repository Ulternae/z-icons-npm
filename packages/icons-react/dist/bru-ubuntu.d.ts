import React from 'react';

export interface BruUbuntuProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruUbuntu: React.FC<BruUbuntuProps>;
export default BruUbuntu;
