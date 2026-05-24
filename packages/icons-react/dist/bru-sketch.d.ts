import React from 'react';

export interface BruSketchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSketch: React.FC<BruSketchProps>;
export default BruSketch;
