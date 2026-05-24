import React from 'react';

export interface BruSkyatlasProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSkyatlas: React.FC<BruSkyatlasProps>;
export default BruSkyatlas;
