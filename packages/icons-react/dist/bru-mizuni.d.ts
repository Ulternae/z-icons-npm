import React from 'react';

export interface BruMizuniProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruMizuni: React.FC<BruMizuniProps>;
export default BruMizuni;
