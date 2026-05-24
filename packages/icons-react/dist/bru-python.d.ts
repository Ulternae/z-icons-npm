import React from 'react';

export interface BruPythonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPython: React.FC<BruPythonProps>;
export default BruPython;
