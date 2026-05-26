import React from 'react';

export interface LanExpandWideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanExpandWide: React.FC<LanExpandWideProps>;
export default LanExpandWide;
