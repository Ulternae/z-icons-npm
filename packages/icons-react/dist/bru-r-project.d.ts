import React from 'react';

export interface BruRProjectProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruRProject: React.FC<BruRProjectProps>;
export default BruRProject;
